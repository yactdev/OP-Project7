const Comment = require('../models/comments');

exports.getComments = (req, res, next) => {
  Comment.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
exports.createComment = (req, res) => {
  console.log(req.body);
  Comment.create({
    content: req.body.content,
    UserId: req.body.UserId,
    PostId: req.body.PostId,
  })
    .then(() => {
      res.status(200).json('comment has been summited');
    })
    .catch((err) => {
      res.status(401).json({
        error: err,
        message: 'An unexpected error has occurred...',
      });
    });
};
