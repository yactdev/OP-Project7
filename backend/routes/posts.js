const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const auth = require('../middleware/auth');

router.post('/', auth, postsController.createPost);
router.get('/', postsController.findAll);
router.delete('/', postsController.deletePost);
module.exports = router;
