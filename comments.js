//create web server
var express = require('express');
var router = express.Router();

//import comments controller
var commentsController = require('../controllers/commentsController.js');

// GET request to display comments
router.get('/', commentsController.comments_list);

// GET request for creating comments
router.get('/create', commentsController.comments_create_get);

// POST request for creating comments
router.post('/create', commentsController.comments_create_post);

// GET request to delete comments
router.get('/:id/delete', commentsController.comments_delete_get);

// POST request to delete comments
router.post('/:id/delete', commentsController.comments_delete_post);

// GET request to update comments
router.get('/:id/update', commentsController.comments_update_get);

// POST request to update comments
router.post('/:id/update', commentsController.comments_update_post);

// GET request to display specific comments
router.get('/:id', commentsController.comments_detail);

module.exports = router;