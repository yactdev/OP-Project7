const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postsController.createPost);
router.get('/', postsController.findAll);
router.get('/user/:id', auth, postsController.allPosts);
router.delete('/delete/:id', auth, postsController.deletePost);
router.put('/update/:id', auth, multer, postsController.updatePost);
module.exports = router;
