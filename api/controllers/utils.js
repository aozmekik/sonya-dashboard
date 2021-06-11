const mongoose = require('mongoose');
const sharp = require('sharp');
const User = mongoose.model('User');


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



module.exports = {
    getUserID,
    checkUserPrivileges,
    imgToBuffer,
    bufferToImg,
    toIcon,
    imgsToBuffers
};

