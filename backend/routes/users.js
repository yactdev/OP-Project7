const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

const multer = require('../middleware/multer-config');
router.post('/signup', userController.signUp);
router.post('/signIn', userController.signIn);
router.get('/', userController.findAll);

module.exports = router;
