var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var postSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    statement: String,
    image: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // validate: v => Array.isArray(v) && v.length > 0,
    },
    city: {
        type: Number,
        required: true
    },
    town: {
        type: Number,
        required: true
    },
    comments: [commentSchema],
    createdAt:
    {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Post', postSchema, 'Posts');