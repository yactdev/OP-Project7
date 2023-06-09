const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
router.post('/signup', userController.singUp);
router.post('/signIn', userController.singIn);
router.get('/', userController.findAll);

module.exports = router;
