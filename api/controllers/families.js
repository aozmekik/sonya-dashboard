const mongoose = require('mongoose');
const Fam = mongoose.model('Family');
const User = mongoose.model('User');

const userID = (req) => {
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

// TODO. maybe index on date.
const familiesList = (req, res) => {
    let _id = null;
    try {
        _id = userID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = checkUserPrivileges(res, req, user)))
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
    User.findOne({ _id: req.body.registrant }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = checkUserPrivileges(res, req, user)))
            return err;
        if (!user.towns.includes(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' })

        Fam.create({
            registrant: req.body.registrant,
            name: req.body.name,
            idNo: req.body.idNo,
            tel: req.body.tel,
            rent: req.body.rent,
            regDate: new Date().toLocaleDateString(),
            warmingType: req.body.warmingType,
            address: req.body.address,
            city: req.body.city,
            town: req.body.town,
            district: req.body.district,
            street: req.body.street,
            nation: req.body.nation,
            status: req.body.status,
            rating: req.body.rating,
            health: req.body.health,
            education: req.body.education,
            budgets: req.body.budgets,
            members: req.body.members,
            needs: req.body.needs,
            notes: req.body.notes,
            images: req.body.images
        },
            (err, family) => {
                if (err)
                    res.status(400).json(err);
                else
                    res.status(201).json(family);
            });
    }
    );
};


const familiesReadOne = (req, res) => {
    Fam
        .findById(req.params.familyid)
        .exec((err, family) => {
            if (!family)
                return res.status(404).json({ 'message': 'family not found' });
            else if (err)
                return res.status(404).json(err);
            else
                return res.status(200).json(family);
        });
}

const familiesUpdateOne = (req, res) => {
    if (!req.params.familyid)
        return res.status(404).json({ 'message': 'Not found, familyid is required' });

    Fam
        .findById(req.params.familyid)
        .exec((err, family) => {
            if (!family)
                return res.status(404).json({ 'message': 'familyid not found' });
            else if (err)
                return res.status(400).json(err);

            // update
            family.clerk = req.body.clerk;
            family.name = req.body.name;
            family.idNo = req.body.idNo;
            family.tel = req.body.tel;
            family.rent = req.body.rent;
            family.warmingType = req.body.warmingType;
            family.address = req.body.address;
            family.district = req.body.district;
            family.nation = req.body.nation;
            family.status = req.body.status;
            family.budgets = req.body.budgets;
            family.members = req.body.members;
            family.needs = req.body.needs;
            family.notes = req.body.notes;
            family.images = req.body.images;

            family.save((err, fam) => {
                if (err)
                    res.status(404).json(err);
                else
                    res.status(200).json(fam);
            });

        });

}

const familiesDeleteOne = (req, res) => {
    const { familyid } = req.params;
    if (familyid) {
        Fam
            .findByIdAndRemove(familyid)
            .exec((err, family) => {
                if (err)
                    return res.status(404).json(err);

                return res.status(204).json(null);
            }
            );
    } else
        res.status(404).json({ 'message': 'No Family' });

};

module.exports = {
    familiesList,
    familiesCreate,
    familiesReadOne,
    familiesUpdateOne,
    familiesDeleteOne
};

