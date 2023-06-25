const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(file);
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split('.');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name[0] + '_' + Date.now() + '.' + extension);
  },
});

module.exports = multer({ storage: storage }).single('image');
