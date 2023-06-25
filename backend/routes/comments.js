const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentController = require('../controllers/comment');

router.get('/:id', commentController.getComments);
router.delete('/', commentController.deleteComment);
router.post('/', commentController.createComment);

module.exports = router;
