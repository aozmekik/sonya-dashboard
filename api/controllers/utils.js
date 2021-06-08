const mongoose = require('mongoose');
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

const imgToBuffer = (img) => {
    return Buffer.from(img.split(',')[1], 'base64');
};

const bufferToImg = (buffer) => {
    return `data:image/png;base64,${buffer.toString('base64')}`;
};



module.exports = {
    getUserID,
    checkUserPrivileges,
    imgToBuffer,
    bufferToImg
};

