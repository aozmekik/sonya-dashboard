const mongoose = require('mongoose');

const Utils = require('./utils');
const Image = mongoose.model('Image');


// FIXME. change name
const postsReadOne = (req, res) => {
    Image
        .findById(req.params.imageid)
        .exec((err, image) => {
            if (!image)
                return res.status(404).json({ 'message': 'image not found' });
            else if (err)
                return res.status(404).json(err);
            else {
                const data = image.data.map(img => Utils.bufferToImg(img));
                return res.status(200).json(data);
            }
        });

}

module.exports = {
    postsReadOne,
};