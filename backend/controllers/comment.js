const Comment = require('../models/comments');
const Post = require('../models/posts');
const User = require('../models/users');
exports.getComments = (req, res, next) => {
  Comment.findAll({
    where: { PostId: req.params.id },
    include: [Post, User],
  })
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

exports.deleteComment = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(200).json({
      message: 'User has been deleted...',
    });
  });
};
