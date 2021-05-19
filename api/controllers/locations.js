const mongoose = require('mongoose');

const citiesList = (req, res) => {
    const Cit = mongoose.model('City');
    Cit.find({}, (err, cities) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(cities);
        }
    });
};


const townsList = (req, res) => {
    const Town = mongoose.model('Town');
    Town
        .find({ 'il_id': req.params.cityid })
        .exec((err, town) => {
            if (!town) {
                return res
                    .status(404)
                    .json({ "message": "town not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(town);
            }
        });
}

const districtsList = (req, res) => {
    const Dist = mongoose.model('District');
    Dist
        .find({ 'ilce_id': req.params.townid })
        .exec((err, district) => {
            if (!district) {
                return res
                    .status(404)
                    .json({ "message": "district not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(district);
            }
        });
}

const streetsList = (req, res) => {
    const Streets = mongoose.model('Street');
    Streets
        .find({ 'mahalle_id': req.params.districtid })
        .exec((err, street) => {
            if (!street) {
                return res
                    .status(404)
                    .json({ "message": "street not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(street);
            }
        });
}


module.exports = {
    citiesList,
    townsList,
    districtsList,
    streetsList,
};
