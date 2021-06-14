const mongoose = require('mongoose');
const Fam = mongoose.model('Family');
const User = mongoose.model('User');
const Image = mongoose.model('Image');
const Utils = require('./utils');

const pdfLib = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const fs = require('fs');








// TODO. maybe index on date.
const familiesList = (req, res) => {
    if (!req.body.city)
        return res.status(404).json({ 'message': 'City is required' });

    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }


    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return res.status(400).json(err);
        if (!user.isAllowed(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' })

        const query = {
            name: req.body.name ? new RegExp(req.body.name, 'ig') : null,
            city: req.body.city,
            town: req.body.town,
            district: req.body.district,
            street: req.body.street,
            rating: req.body.rating,
            aid: req.body.aid,
            education: req.body.education,
            warmingType: req.body.warmingType
        };

        Object.keys(query).forEach(function (key) {
            if (query[key] == null)
                delete query[key];
        });

        Fam
            .find(query)
            .populate({ path: 'createdBy', select: { 'salt': 0, 'hash': 0 }, model: User })
            .populate({ path: 'images', model: Image })
            .exec((err, families) => {
                if (err)
                    return res.status(400).json(err);

                const familiesJSON = [];
                for (let family of families) {
                    familyJSON = family.toObject();
                    if (familyJSON.images)
                        familyJSON.images.data = familyJSON.images.data.map(buf => Utils.bufferToImg(buf));
                    familiesJSON.push(familyJSON);
                }

                return res.status(201).json(familiesJSON);
            });
    });


};

const familiesCreate = (req, res) => {
    if (!req.body.name || !req.body.city || !req.body.town)
        return res.status(404).json({ 'message': 'Missing fields' });

    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return res.status(400).json(err);
        if (_id != req.body.createdBy)
            return res.status(400).json({ msg: 'Token does not match with creator' });


        User.findOne({ _id: req.body.createdBy }, async (err, user) => {
            if (err)
                return res.status(400).json(err);
            if ((err = Utils.checkUserPrivileges(res, req, user)))
                return res.status(400).json(err);

            const createFamily = (images) => {
                Fam.create({
                    createdBy: req.body.createdBy,
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
                    images: images
                },
                    (err, family) => {
                        if (err)
                            return res.status(400).json(err);
                        else
                            return res.status(201).json(family);
                    });
            }

            if (req.body.images && req.body.images.length > 0) {
                const data = await Utils.imgsToBuffers(req.body.images);
                Image.create({ data: data }, (err, image) => {
                    if (err)
                        return res.status(400).json(err);

                    return createFamily(image._id);
                });
            }
            else
                return createFamily(null);

        }
        );
    });


};


// FIXME. images
const familiesReadOne = (req, res) => {
    Fam
        .findById(req.params.familyid)
        .populate({ path: 'createdBy', select: { 'salt': 0, 'hash': 0 }, model: User })
        .populate({ path: 'images', model: Image })
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

    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return err;
        if (!user.isAllowed(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' })

        Fam
            .findById(req.params.familyid)
            .exec((err, family) => {
                if (!family)
                    return res.status(404).json({ 'message': 'familyid not found' });
                if (err)
                    return res.status(400).json(err);
                if (user.role === 1 && family.createdBy != _id)
                    return res.status(400).json({ msg: 'Non-manager user is not the registrant of this family.' })

                const updateFamily = (images) => {
                    family.name = req.body.name;
                    family.idNo = req.body.idNo;
                    family.tel = req.body.tel;
                    family.rent = req.body.rent;
                    family.warmingType = req.body.warmingType;
                    family.address = req.body.address;
                    family.city = req.body.city;
                    family.town = req.body.town;
                    family.district = req.body.district;
                    family.street = req.body.street;
                    family.nation = req.body.nation;
                    family.rating = req.body.rating;
                    family.aid = req.body.aid;
                    family.health = req.body.health;
                    family.education = req.body.education;
                    family.budgets = req.body.budgets;
                    family.members = req.body.members;
                    family.needs = req.body.needs;
                    family.notes = req.body.notes;
                    family.images = images;

                    family.save((err, fam) => {
                        if (err)
                            res.status(404).json(err);
                        else
                            res.status(200).json(fam);
                    });
                }

                // delete old img buffer
                Image.deleteOne({ _id: family.images }, async (err, _) => {
                    if (err)
                        return res.status(400).json(err);

                    if (req.body.images && req.body.images.length > 0) {
                        const data = await Utils.imgsToBuffers(req.body.images);
                        // create new img buffer
                        Image.create({ data: data }, (err, image) => {
                            if (err)
                                return res.status(400).json(err);

                            updateFamily(image._id);
                        });
                    }
                    else
                        updateFamily(null);

                });


            });
    });

}

const familiesDeleteOne = (req, res) => {
    if (!req.params.familyid)
        return res.status(404).json({ 'message': 'Not found, familyid is required' });
    const { familyid } = req.params;

    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return err;
        if (!user.isAllowed(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' })


        if (familyid) {
            Fam
                .findByIdAndDelete(familyid)
                .exec((err, family) => {
                    if (err)
                        return res.status(404).json(err);

                    return res.status(204).json(null);
                }
                );
        } else
            res.status(404).json({ 'message': 'No Family' });
    });
};

const familiesPDF = (req, res) => {
    const sourceFont = "/home/drh0use/Downloads/project/sonya/api/assets/font.otf";
    const sourcePDF = "/home/drh0use/Downloads/project/sonya/api/assets/form.pdf";
    const destinationPDF = "/home/drh0use/Downloads/project/sonya/api/assets/output.pdf";


    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }

    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return err;
        if (!user.isAllowed(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' })

        Fam
            .findById(req.params.familyid)
            .exec((err, family) => {
                if (err)
                    return res.status(400).json(err);
                if (!family)
                    return res.status(400).json({ msg: 'Family not found' });

                Utils
                    .toForm(family)
                    .then((form) => {


                        fs.readFile(sourcePDF, async (err, data) => {
                            if (err)
                                return res.status(500).json(err);


                            fs.readFile(sourceFont, async (err, font) => {


                                const pdfDoc = await pdfLib.PDFDocument.load(data);
                                const pdfForm = pdfDoc.getForm();

                                pdfDoc.registerFontkit(fontkit);
                                const ubuntuFont = await pdfDoc.embedFont(font);

                                Object.keys(form).forEach(function (key) {
                                    pdfForm.getTextField(key).setText(form[key]);
                                });

                                pdfForm.updateFieldAppearances(ubuntuFont);

                                const output = await pdfDoc.save();
                                res.setHeader('Content-Type', 'application/pdf');
                                res.setHeader('Content-Disposition', 'attachment; filename=aile.pdf');
                                res.send(Buffer.from(output));

                            });


                        });

                    })
            });
    });
}


module.exports = {
    familiesPDF,
    familiesList,
    familiesCreate,
    familiesReadOne,
    familiesUpdateOne,
    familiesDeleteOne
};

