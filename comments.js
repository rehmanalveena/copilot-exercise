//create web server
//import modules
const express = require('express');
const router = express.Router();
const Comments = require('../models/comments');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//get comments
router.get('/comments', (req, res, next) => {
    Comments.find((err, comments) => {
        res.json(comments);
    })
});

//add comments
router.post('/comments', (req, res, next) => {
    let newComment = new Comments({
        comment: req.body.comment,
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_image: req.body.user_image,
        date: req.body.date,
        post_id: req.body.post_id
    });
    newComment.save((err, comment) => {
        if (err) {
            res.json({ msg: 'Failed to add comment' });
        }
        else {
            res.json({ msg: 'Comment added successfully' });
        }
    })
});

//delete comments
router.delete('/comments/:id', (req, res, next) => {
    Comments.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

//update comments
router.put('/comments/:id', (req, res, next) => {
    Comments.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            comment: req.body.comment,
            user_id: req.body.user_id,
            user_name: req.body.user_name,
            user_image: req.body.user_image,
            date: req.body.date,
            post_id: req.body.post_id
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        });
});

//get comments by post id
router.get('/comments/:id', (req, res, next) => {
    Comments.find({ post_id: req.params.id }, (err, comments) => {
        res.json(comments);
    })
});

//export the module
module.exports = router;
