const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const commentController = require('../controllers/comment');

router.get('/', auth, commentController.getComments);

module.exports = router;
