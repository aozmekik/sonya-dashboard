const mongoose = require('mongoose');
const Utils = require('../utils');

const Fam = mongoose.model('Family');
const User = mongoose.model('User');


const familiesList = (req, res) => {
    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if (!user.isAdmin())
            return err;

        Fam.find({}, (err, families) => {
            if (err)
                res.status(400).json(err);
            else
                res.status(201).json(families);
        });
    });


};

const familiesCreate = (req, res) => {
    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, async (err, user) => {
        if (err)
            return res.status(400).json(err);
        if (!user.isAdmin())
            return err;

        const images = Utils.imgsToBuffers(req.body.images);
        Image.create({ data: images }, (err, image) => {
            if (err)
                return res.status(400).json(err);
            if (!image)
                return res.status(400).json({ msg: 'Image problem' });

            Fam.create({
                registrant: req.body.registrant,
                name: req.body.name,
                idNo: req.body.idNo,
                tel: req.body.tel,
                rent: req.body.rent,
                warmingType: req.body.warmingType,
                address: req.body.address,
                city: req.body.city,
                town: req.body.town,
                district: req.body.district,
                street: req.body.street,
                nation: req.body.nation,
                rating: req.body.rating,
                aid: req.body.aid,
                health: req.body.health,
                education: req.body.education,
                budgets: req.body.budgets,
                members: req.body.members,
                needs: req.body.needs,
                notes: req.body.notes,
                images: image._id
            },
                (err, family) => {
                    if (err)
                        res.status(400).json(err);
                    else
                        res.status(201).json(family);
                });


        });



    }
    );
};


module.exports = {
    familiesList,
    familiesCreate,
    
};
