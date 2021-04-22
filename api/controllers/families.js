const mongoose = require('mongoose');
const Fam = mongoose.model('Family');

// TODO. maybe index on date.
const familiesList = (req, res) => {
    Fam.find({}, (err, families) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(families);
        }
    });
};

const familiesCreate = (req, res) => {
    Fam.create({
        clerk: req.body.clerk,
        name: req.body.name,
        idNo: req.body.idNo,
        tel: req.body.tel,
        rent: req.body.rent,
        regDate: new Date().toLocaleDateString(),
        warmingType: req.body.warmingType,
        address: req.body.address,
        district: req.body.district,
        nation: req.body.nation,
        status: req.body.status,
        budgets: req.body.budgets,
        members: req.body.members,
        needs: req.body.needs,
        notes: req.body.notes,
        images: req.body.images
    },
        (err, family) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(family);
            }
        });
};


const familiesReadOne = (req, res) => {
    Fam
        .findById(req.params.familyid)
        .exec((err, family) => {
            if (!family) {
                return res
                    .status(404)
                    .json({ "message": "family not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(family);
            }
        });
}

const familiesUpdateOne = (req, res) => {
    if (!req.params.familyid) {
        return res
            .status(404)
            .json({ "message": "Not found, familyid is required" });
    }

    Fam
        .findById(req.params.familyid)
        .exec((err, family) => {
            if (!family) {
                return res
                    .status(404)
                    .json({
                        "message": "familyid not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }

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
                if (err) {
                    res
                        .status(404)
                        .json(err);
                }
                else {
                    res
                        .status(200)
                        .json(fam);
                }
            });

        });

}

const familiesDeleteOne = (req, res) => {
    const { familyid } = req.params;
    if (familyid) {
        Fam
            .findByIdAndRemove(familyid)
            .exec((err, family) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }

                res
                    .status(204)
                    .json(null);
            }
            );
    } else {
        res
            .status(404)
            .json({ "message": "No Family" });

    }
};

module.exports = {
    familiesList,
    familiesCreate,
    familiesReadOne,
    familiesUpdateOne,
    familiesDeleteOne
};

