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
        max: new Date().getFullYear() + 1,
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
    medicine: {
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
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});


var familySchema = new mongoose.Schema({
    createdBy: {
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
    },
    rent: {
        type: Number,
        min: 0
    },
    createdAt:
    {
        required: true,
        type: Date,
        default: Date.now
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
    rating: {
        type: Number,
        enum: [0, 1, 2, 3, 4, null]
    },
    aid: {
        type: Boolean,
        default: false
    },
    health:
    {
        type: Boolean,
        default: false
    },
    education:
    {
        type: Boolean,
        default: false
    },
    budgets: [budgetSchema],
    members: [memberSchema],
    needs: [String],
    notes: [noteSchema],
    images: mongoose.Schema.Types.ObjectId
});

mongoose.model('Family', familySchema, 'Families');