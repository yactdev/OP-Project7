const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, postsController.createPost);
router.get('/', postsController.findAll);
router.get('/:id', postsController.getPostById);
router.delete('/delete/:id', auth, postsController.deletePost);
router.put('/update/:id', multer, postsController.updatePost);
router.post('/likes/:id', postsController.likes);
router.post('/readby/:id', postsController.readBy);
module.exports = router;
