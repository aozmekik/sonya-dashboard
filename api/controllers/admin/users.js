const mongoose = require('mongoose');
const Utils = require('../utils');

const User = mongoose.model('User');

const usersList = (req, res) => {
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
            return res.status(400).json({ msg: 'Not allowed' });

        const projection = { salt: 0, hash: 0, __v: 0 };
        User
            .find({ _id: { $ne: _id }, status: { $ne: 0 } }, projection, (err, users) => {
                if (err)
                    return res.status(400).json(err);

                return res.status(201).json(users);
            });
    });
};

const usersUpdateOne = (req, res) => {
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
            return res.status(400).json({ msg: 'Not allowed' });
        if (req.body.status === 0)
            return res.status(400).json({ 'message': 'Can not change user status to 0' });
        if (req.body.role === 3)
            return res.status(400).json({ 'message': 'Can not give user administration' });


        User
            .findById(req.params.userid)
            .exec((err, us) => {
                if (!us)
                    return res.status(404).json({ 'message': 'User not found' });
                if (err)
                    return res.status(400).json(err);

                us.role = req.body.role;
                us.status = req.body.status;

                if (us.role === 0)
                    us.towns = [];
                else
                    us.towns = req.body.towns;

                us.save((err, updated) => {
                    if (err)
                        return res.status(404).json(err);
                    else
                        return res.status(200).json(updated.clean());
                });
            });
    });
};

// const usersConfirm = (req, res) => {
//     if (req.query.confirm == null)
//         return res.status(400).json({ msg: 'Missing queries' });

//     let _id = null;
//     try {
//         _id = Utils.getUserID(req);
//     } catch (err) {
//         return res.status(500).json(err);
//     }

//     User.findOne({ _id: _id }, (err, user) => {
//         if (err)
//             return res.status(400).json(err);
//         if (!user.isAdmin())
//             return err;

//         if (req.query.confirm) {
//             User
//                 .findOne({ _id: req.params.userid }, (err, us) => {
//                     if (err)
//                         return res.status(400).json(err);
//                     if (!us)
//                         return res.status(400).json('Could not find user');
//                     if (us.status === 2)
//                         return res.status(400).json({ msg: 'User already confirmed' });

//                     us.status = 2;
//                     us.save((err, updated) => {
//                         if (err)
//                             return res.status(404).json(err);
//                         else
//                             return res.status(200).json(updated.clean());
//                     });
//                 });
//         }
//         else {
//             User
//                 .findOneAndDelete({ _id: req.params.userid }, (err, us) => {
//                     if (err)
//                         return res.status(400).json(err);

//                     return res.status(200).json(us);
//                 });
//         }


//     });
// }

module.exports = {
    usersList,
    usersUpdateOne
};