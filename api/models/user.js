var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true,
        enum: [0, 1, 2],
        default: 0
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2],
        default: 0
    },
    image: Buffer,
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};

userSchema.methods.validPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};

userSchema.methods.emailConfirmed = function () {
    return this.status === 1;
}

userSchema.methods.userConfirmed = function () {
    return this.status === 2;
}


const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    }
});

tokenSchema.methods.generate = function (userid) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    this.userId = userid;
    this.token = jwt.sign(
        {
            _id: this._id,
            exp: parseInt(expiry.getTime() / 1000, 10)
        },
        process.env.JWT_SECRET,
    );
};


mongoose.model('User', userSchema, 'Users');
mongoose.model('Token', tokenSchema, 'Tokens');