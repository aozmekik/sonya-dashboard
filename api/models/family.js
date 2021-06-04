var mongoose = require('mongoose');

var budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    type: {
        type: Number,
        required: true,
        enum: [0, 1, 2]
    }
});

var memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    idNo: {
        type: Number,
        min: 10000000000,
        max: 99999999999,
    },
    birthyear: {
        type: Number,
        min: 1920,
        max: 1900,
    },
    gender: {
        type: Number,
        enum: [0, 1, null]
    },
    job: {
        type: String,
        trim: true
    },
    income: Number,
    size: {
        type: String,
        trim: true
    },
    shoe: Number,
    disease:
    {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    },
    school:
    {
        type: String,
        trim: true
    },
    grade: Number,
    kinship: {
        type: String,
        trim: true
    }
});

var noteSchema = new mongoose.Schema({
    statement:
    {
        type: String,
        required: true,
        trim: true
    },
    clerks: {
        type: [String],
        required: true
    },
});


var familySchema = new mongoose.Schema({
    registrant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    idNo: {
        type: Number,
        min: 10000000000,
        max: 99999999999,
    },
    tel: {
        type: Number,
        min: 10000000000,
        max: 99999999999,
    },
    rent: {
        type: Number,
        min: 0
    },
    regDate:
    {
        type: String,
        default: new Date().toLocaleDateString()
    },
    warmingType:
    {
        type: Number,
        enum: [0, 1, 2, null]
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: Number,
        min: 0,
        max: 81,
        required: true
    },
    town: {
        type: Number,
        required: true
    },
    district: Number,
    street: Number,
    nation: {
        type: String,
        trim: true
    },
    status:
    {
        type: Number,
        enum: [0, 1, 2, 3, 4, null],
        required: true
    },
    rating: {
        type: Number,
        enum: [0, 1, 2, 3, 4, null]
    },
    health:
    {
        type: Boolean,
    },
    education:
    {
        type: Boolean,
    },
    budgets: [budgetSchema],
    members: [memberSchema],
    needs: [String],
    notes: [noteSchema],
    images: [String] // FIXME. make it buffer and change only from API.
});

mongoose.model('Family', familySchema, 'Families');