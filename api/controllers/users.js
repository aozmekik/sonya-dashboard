const mongoose = require('mongoose');
const User = mongoose.model('User');

const usersList = (req, res) => {
    let _id = null;
    try {
        const token = req.headers.authorization.split(' ')[1];
        _id = User.getIDfromJWT(token);
    } catch (err) {
        return res.status(500).json(err);
    }

    const projection = { salt: 0, hash: 0, __v: 0, email: 0 };
    User.find({ name: new RegExp(req.params.name, 'ig'), _id: { $ne: _id }, status: 2, role: { $ne: 3 } }, projection, (err, user) => {
        if (err)
            return res.status(400).json(err);
        // FIXME. limit results & sort maybe?

        return res.status(200).json(user);
    });
};

const usersPrivilege = (req, res) => {
    if (req.body.granted == null || req.body.town == null)
        return res.status(400).json({ msg: 'Fields are missing.' });

    let _id = null;
    try {
        const token = req.headers.authorization.split(' ')[1];
        _id = User.getIDfromJWT(token);
    } catch (err) {
        return res.status(500).json(err);
    }

    // check if caller can do this operation
    User.findOne({ _id: _id }, (err, self) => {
        if (err)
            return res.status(400).json(err);
        if (!self)
            return res.status(400).json({ msg: 'User is not found.' });
        if (self.role != 2)
            return res.status(400).json({ msg: 'Not authorized for this operation.' });

        // also one can't grant himself.
        if (_id == req.params.userid)
            return res.status(400).json({ msg: 'Not authorized for this operation.' });

        User.findOne({ _id: req.params.userid }, (err, user) => {
            if (err)
                return res.status(400).json(err);
            if (!user)
                return res.status(400).json({ msg: 'User is not found.' });

            if (user.role == 2)
                return res.status(400).json({ msg: 'Not authorized for this operation.' });


            if (req.body.granted == true) { // the privilege is granted
                if (user.towns.includes(req.body.town))
                    return res.status(400).json({ msg: 'User already has privilege on this town.' });

                user.towns.push(req.body.town);

                user.role = 1;
            }

            else { // the privilege is taken    

                if (!user.towns.includes(req.body.town))
                    return res.status(400).json({ msg: 'User has no privilege on this town.' });

                user.towns.splice(user.towns.indexOf(req.body.town), 1);

                // If no privileges remain, the user becomes guest again.
                if (user.towns.length === 0)
                    user.role = 0;
            }

            user.save((err) => {
                if (err)
                    return res.status(400).json(err);
                return res.status(200).json(user.clean());
            })


        });
    })


};

module.exports = {
    usersList,
    usersPrivilege
};

