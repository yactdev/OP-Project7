const Comment = require('../models/posts');

exports.getComments = (req, res, next) => {
  Comment.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
