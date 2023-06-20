const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
router.post('/signup', multer, userController.signUp);
router.post('/signIn', userController.signIn);
router.get('/', userController.findAll);
router.get('/:id', userController.getUserById);
router.delete('/delete/:id', auth, userController.deleteUser);
module.exports = router;
