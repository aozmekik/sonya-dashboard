const mongoose = require('mongoose');
const Utils = require('./utils');

const User = mongoose.model('User');
const Post = mongoose.model('Post');
const Image = mongoose.model('Image');


const postsList = (req, res) => {
    // if (!req.body.city)
    // return res.status(404).json({ 'message': 'City is required' });

    const nPerPage = 5;

    let query;
    if (req.query.before) {
        query = Post
            .find({ createdAt: { $lt: new Date(req.query.before) } })
            .sort({ createdAt: -1 })

    }
    else if (req.query.after) {
        query = Post
            .find({ createdAt: { $gt: new Date(req.query.after) } })
            .sort({ createdAt: -1 })
            .limit(nPerPage)

    }
    else {
        query = Post
            .find()
            .sort({ createdAt: -1 })
            .limit(nPerPage)
    }

    query
        .exec((err, posts) => {
            if (err)
                return res.status(400).json(err);

            if (posts.length > 0) {
                new Promise((resolve, reject) => {
                    let len = 0;
                    posts.forEach((post, index, array) =>
                        User.findOne({ _id: post.userid }, (err, user) => {
                            if (err)
                                return res.status(400).json(err);
                            if (!user)
                                return res.status(400).json({ msg: 'We were unable to find a user.' });

                            array[index] = { ...post.toObject(), user: user.clean() };
                            len++;
                            if (len === array.length)
                                resolve();
                        }));
                })
                    .then(() => res.status(200).json(posts));
            }
            else
                return res.status(200).json(posts);


        });


};

const postsListOfUser = (req, res) => {
    const userid = req.params.userid;

    User.findOne({ _id: userid }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if (!user)
            return res.status(400).json({ msg: 'We were unable to find a user.' });

        const nPerPage = 12;

        let query;
        if (req.query.before) {
            query = Post
                .find({ userid: userid, createdAt: { $lt: new Date(req.query.before) } })
                .sort({ createdAt: -1 })
        }
        else if (req.query.after) {
            query = Post
                .find({ userid: userid, createdAt: { $gt: new Date(req.query.after) } })
                .sort({ createdAt: -1 })
                .limit(nPerPage)
        }
        else {
            query = Post
                .find({ userid: userid })
                .sort({ createdAt: -1 })
                .limit(nPerPage)
        }


        query
            .sort({ createdAt: -1 })
            .exec((err, posts) => {
                if (err)
                    return res.status(400).json(err);

                if (posts.length > 0) {
                    new Promise((resolve, reject) => {
                        let len = 0;
                        posts.forEach((post, index, array) =>
                            Image.findOne({ _id: post.image }, (err, image) => {
                                if (err)
                                    return res.status(400).json(err);
                                if (!user)
                                    return res.status(400).json({ msg: 'Image not found.' });


                                array[index] = { ...post.toObject(), icon: Utils.bufferToImg(image.data[0]) };
                                len++;
                                if (len === array.length)
                                    resolve();
                            }));
                    })
                        .then(() => { res.status(200).json(posts) });
                }
                else
                    return res.status(200).json(posts);

            });
    });

}

const postsCreate = (req, res) => {
    if (!req.body.userid && !req.body.city && !req.body.town)
        return res.status(404).json({ 'message': 'Fields are missing' });
    if (!req.body.images || req.body.images.length <= 0)
        return res.status(404).json({ 'message': 'Images are missing' });


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
        if (req.body.town && !user.towns.includes(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' });


        const data = req.body.images.map(img => { return Utils.imgToBuffer(img) });
        Image.create(
            { data: data },
            (err, image) => {
                if (err)
                    return res.status(400).json(err);


                Post.create({
                    userid: _id,
                    statement: req.body.statement,
                    image: image._id,
                    city: req.body.city,
                    town: req.body.town,
                    comments: null,
                }, (err, post) => {
                    if (err)
                        res.status(400).json(err);
                    else
                        res.status(201).json(post);
                });
            });



    });
}

module.exports = {
    postsList,
    postsListOfUser,
    postsCreate
};