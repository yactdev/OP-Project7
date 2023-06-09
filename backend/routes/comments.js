const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentController = require('../controllers/comment');

router.get('/', auth, commentController.getComments);

module.exports = router;
