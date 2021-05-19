var mongoose = require('mongoose');

var budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    type: {
        type: Number,
        required: true,
        min: 0,
        max: 2
    }
});

var memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    idNo: Number,
    birthyear: Number,
    gender: {
        type: Number,
        min: 0,
        max: 1
    },
    job: String,
    income: Number,
    size: String,
    shoe: Number,
    disease: String,
    note: String,
    school: String,
    grade: Number,
    kinship: String,
});

var noteSchema = new mongoose.Schema({
    statement:
    {
        type: String,
        required: true
    },
    clerks: {
        type: [String],
        required: true
    },
});


var familySchema = new mongoose.Schema({
    clerks: {
        type: [String],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    idNo: Number,
    tel: Number,
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
        min: 0,
        max: 2
    },
    address: String,
    city: Number,
    district: Number,
    town: Number,
    street: Number,
    nation: String,
    status:
    {
        type: Number,
        min: 0,
        max: 4,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 4,
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
    images: [String]
});

mongoose.model('Family', familySchema, 'Families');