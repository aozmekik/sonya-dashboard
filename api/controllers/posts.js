const mongoose = require('mongoose');
const Utils = require('./utils');
const User = mongoose.model('User');
const Post = mongoose.model('Post');
const Image = mongoose.model('Image');


const postsList = (req, res) => {
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
        .populate({ path: 'createdBy', select: { 'salt': 0, 'hash': 0 }, model: User })
        .exec((err, posts) => {
            if (err)
                return res.status(400).json(err);
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
                .find({ createdBy: userid, createdAt: { $lt: new Date(req.query.before) } })
                .sort({ createdAt: -1 })
        }
        else if (req.query.after) {
            query = Post
                .find({ createdBy: userid, createdAt: { $gt: new Date(req.query.after) } })
                .sort({ createdAt: -1 })
                .limit(nPerPage)
        }
        else {
            query = Post
                .find({ createdBy: userid })
                .sort({ createdAt: -1 })
                .limit(nPerPage)
        }

        query
            .populate({ path: 'image', model: Image })
            .populate({ path: 'createdBy', select: { 'salt': 0, 'hash': 0 }, model: User })
            .exec(async (err, posts) => {
                if (err)
                    return res.status(400).json(err);

                let postsJSON = [];
                try {
                    for (item of posts) {
                        let icon = await Utils.toIcon(item.image.data[0])
                        let postJSON = item.toObject();
                        postJSON.image = postJSON.image._id;
                        postsJSON.push({ ...postJSON, icon: Utils.bufferToImg(icon) })
                    }
                }
                catch (e) {
                    return res.status(500).json(e);
                }


                return res.status(200).json(postsJSON);
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


    User.findOne({ _id: _id }, async (err, user) => {
        if (err)
            return res.status(400).json(err);
        if ((err = Utils.checkUserPrivileges(res, req, user)))
            return err;
        if (req.body.town && !user.towns.includes(req.body.town))
            return res.status(400).json({ msg: 'User cannot do operation in this region.' });

        const data = await Utils.imgsToBuffers(req.body.images);
        Image.create(
            { data: data },
            (err, image) => {
                if (err)
                    return res.status(400).json(err);


                Post.create({
                    createdBy: _id,
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

const commentsCreate = (req, res) => {
    if (!req.body.statement)
        return res.status(404).json({ 'message': 'Comment missing' });

    let _id = null;
    try {
        _id = Utils.getUserID(req);
    } catch (err) {
        return res.status(500).json(err);
    }


    User.findOne({ _id: _id }, (err, user) => {
        if (err)
            return res.status(400).json(err);
        if (!user)
            return res.status(400).json({ msg: 'We were unable to find a user.' });


        Post.find({ _id: req.params.postid }, (err, post) => {
            if (err)
                return res.status(400).json(err);
            if (!post)
                return res.status(400).json({ msg: 'We were unable to find a post.' });


            post.comments.push({
                userid: _id,
                statement: req.body.statement
            });

            post.save((err, p) => {
                if (err)
                    res.status(404).json(err);
                else
                    res.status(200).json(p);
            });
        });
    });

}

module.exports = {
    postsList,
    postsListOfUser,
    postsCreate,
};