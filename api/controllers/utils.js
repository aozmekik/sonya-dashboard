const mongoose = require('mongoose');
const sharp = require('sharp');
const nodemailer = require('nodemailer');

const User = mongoose.model('User');
const City = mongoose.model('City');
const Town = mongoose.model('Town');
const District = mongoose.model('District');
const Street = mongoose.model('Street');


const getUserID = (req) => {
    const token = req.headers.authorization.split(' ')[1];
    return User.getIDfromJWT(token);
}

const checkUserPrivileges = (res, req, user) => {
    if (!user)
        return res.status(400).json({ msg: 'We were unable to find a user.' });
    if (user.role === 0)
        return res.status(400).json({ msg: 'Guest user cannot do this operation.' });

    return null;
}

const resize = async (buffer, width) => {
    return await sharp(buffer)
        .resize(width)
        .jpeg({ mozjpeg: true })
        .toBuffer();
}

const toIcon = async (buffer) => {
    return await resize(buffer, 360);
}

const imgToBuffer = async (img) => {
    return await resize(Buffer.from(img.split(',')[1], 'base64'), 1080);
};

const bufferToImg = (buffer) => {
    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
};

const imgsToBuffers = async (imgs) => {
    const x = [];
    const images = imgs;
    for (let i = 0; i < images.length; ++i) {
        let y = await imgToBuffer(images[i]);
        x.push(y);
    }
    return x;
}

function isSimilar(s1, s2) {
    return similarity(s1, s2) > 0.5;
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

const toForm = async (family) => {
    const form = {};

    form['createdAt'] = family.createdAt.toISOString();

    // general
    form['name'] = family.name;
    form['nation'] = family.nation;
    form['idNo'] = family.idNo;
    form['tel'] = family.tel;
    form['address'] = family.address ? `${family.address},` : '';

    // fill address from location info
    try {
        const street = await Street.findOne({ sokak_id: family.street }).exec();
        if (street)
            form['address'] += `${street.sokak_adi}, ${street.mahalle_adi}, ${street.ilce_adi}, ${street.il_adi}`;
        else {
            const district = await District.findOne({ mahalle_id: family.district }).exec();
            if (district)
                form['address'] += ` ${district.mahalle_id}, ${district.ilce_adi}, ${district.il_adi}`;
            else {
                const town = await Town.findOne({ ilce_id: family.town }).exec();
                if (town)
                    form['address'] += ` ${town.ilce_adi}, ${town.il_adi}`;
                else {
                    const city = await City.findOne({ il_id: family.city }).exec();
                    if (city)
                        form['address'] += ` ${city.il_adi}`;
                }
            }
        }
    }
    catch (e) {
        console.error(e);
    }

    // fill income fields

    const workers = family.members.filter(member => member.income != null);
    for (let i = 0; i < Math.min(3, workers.length); ++i) {
        form[`worker${i + 1}Name`] = workers[i].name;
        form[`worker${i + 1}Age`] = workers[i].birthyear ? new Date().getFullYear() - workers[i].birthyear : null;
        form[`worker${i + 1}Job`] = workers[i].job;
        form[`worker${i + 1}Salary`] = `${workers[i].income}₺`;

    }

    const incomes = family.budgets.filter((budget) => budget.type === 0);
    const expenses = family.budgets.filter((budget) => budget.type === 1);
    const bills = family.budgets.filter((budget) => budget.type === 2);

    let incomeTotal = 0;
    for (let i = 0; i < Math.min(3, incomes.length); ++i) {
        form[`income${i + 1}Name`] = incomes[i].name;
        form[`income${i + 1}Amount`] = `${incomes[i].amount}₺`;
        incomeTotal += incomes[i].amount;
    }
    form['incomeTotal'] = `${incomeTotal}₺`;

    // fill bills
    for (bill of bills) {
        if (isSimilar(bill.name, 'elektrik'))
            form['electric'] = bill.amount;
        else if (isSimilar(bill.name, 'su'))
            form['water'] = bill.amount;
        else if (isSimilar(bill.name, 'doğalgaz'))
            form['naturalgas'] = bill.amount;
    }

    // other expenses
    form['rent'] = family.rent ? `${family.rent}₺` : '';
    form['expenseOther'] = '';
    let expenseTotal = 0;
    for (expense of expenses) {
        form['expenseOther'] += ` ${expense.name}: ${expense.amount}₺, `;
        expenseTotal += expense.amount;
    }
    form['expenseTotal'] = `${expenseTotal}₺`;


    // type of warming
    if (family.warmingType === 0)
        form['warmingType'] = 'Doğalgaz';
    else if (family.warmingType === 1)
        form['warmingType'] = 'Kömür';
    else if (family.warmingType === 2)
        form['warmingType'] = 'Elektrikli Isıtıcı';

    // needs
    for (let i = 0; i < Math.min(8, family.needs.length); i++)
        form[`need${i + 1}`] = family.needs[i];

    // members
    const members = family.members;
    for (let i = 0; i < Math.min(8, members.length); i++) {
        form[`member${i + 1}Name`] = members[i].name;
        form[`member${i + 1}idNo`] = members[i].idNo;
        form[`member${i + 1}Gender`] = members[i].gender === 0 ? 'E' : 'K';
        form[`member${i + 1}Birthyear`] = members[i].birthyear;
        form[`member${i + 1}Size`] = members[i].size;
        form[`member${i + 1}Shoe`] = members[i].shoe;
    }

    // health
    const sicks = family.members.filter(member => member.disease != null);
    for (let i = 0; i < Math.min(2, sicks.length); i++) {
        form[`health${i + 1}Name`] = sicks[i].name;
        form[`health${i + 1}Info`] = sicks[i].disease;
    }

    // education
    const kids = family.members.filter(member => member.school != null);
    for (let i = 0; i < Math.min(5, kids.length); i++) {
        form[`edu${i + 1}Name`] = kids[i].name;
        form[`edu${i + 1}School`] = kids[i].school;
        form[`edu${i + 1}Grade`] = kids[i].grade;
    }

    // registrants 
    // FIXME.
    const user = await User.findById(family.createdBy).exec();
    form['createdBy'] = user.name;

    // notes
    form['notes'] = family.rating ? `Derecelendirme: ${family.rating}/5\n` : '';
    form['notes'] += `Yardım Takip: ${family.aid ? 'Evet' : 'Hayır'} - `;
    form['notes'] += `Eğitim Takip: ${family.education ? 'Evet' : 'Hayır'} - `;
    form['notes'] += `Sağlık Takip: ${family.health ? 'Evet' : 'Hayır'}\n`;
    for (note of family.notes)
        form['notes'] += `${note.statement}\n`;

    Object.keys(form).forEach(function (key) {
        if (form[key] == null)
            delete form[key];
        else
            form[key] = form[key].toString().toLocaleUpperCase('tr-TR');
    });

    form['_id'] = family._id.toString();


    return form;
};

const emailSender = (mailOptions, callback) => {
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    });


    transporter.sendMail(mailOptions, callback);

};



module.exports = {
    toForm,
    toIcon,
    getUserID,
    imgToBuffer,
    bufferToImg,
    imgsToBuffers,
    checkUserPrivileges,
    emailSender
};

