const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postsController.createPost);
router.get('/', auth, postsController.findAll);
router.get('/:id', auth, postsController.getPostById);
router.get('/urb/:id', auth, postsController.uniqueReadBy);
router.delete('/delete/:id', auth, postsController.deletePost);
router.put('/update/:id', auth, multer, postsController.updatePost);
// router.post('/likes/:id', auth, postsController.likes);
router.post('/readby/:id', auth, postsController.readBy);
module.exports = router;
