var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    data: {
        type: [Buffer],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Image', imageSchema, 'Images');