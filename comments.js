// Create web server
var express = require('express');
var router = express.Router();

// Import the Comment model
var Comment = require('../models/comment');

// GET /comments
router.get('/', function(req, res, next) {
  // Retrieve all comments
  Comment.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    // Send back the list of comments
    res.json(comments);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  // Create a new comment based on the form fields
  var comment = new Comment(req.body);
  // Save it into the DB
  comment.save(function(err, comment) {
    if (err) {
      return next(err);
    }
    // Send back the newly created comment
    res.status(201).json(comment);
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res, next) {
  // Retrieve the comment by its ID
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    // Update the comment
    comment.update(req.body, function(err, numberAffected, rawResponse) {
      if (err) {
        return next(err);
      }
      // Send back the updated comment
      res.json(comment);
    });
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
  // Delete the comment by its ID
  Comment.findByIdAndRemove(req.params.id, function(err, comment) {
    if (err) {
      return next(err);
    }
    // Send back the deleted comment
    res.json(comment);
  });
});

module.exports = router;