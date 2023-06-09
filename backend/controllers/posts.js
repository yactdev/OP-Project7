const { stringify } = require('qs');
const Posts = require('../models/posts');
const Users = require('../models/users');
exports.createPost = (req, res, next) => {
  console.log('Deberia ser UserId ' + req.UserId);
  const post = {
    UserId: req.UserId,
    title: req.body.title,
    content: req.body.content,
  };
  console.log(req.headers);
  console.log(req.body);

  Posts.create(post)
    .then(() => {
      console.log(post);
      res.status(200).json({
        message: 'The post has been created',
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err });
    });
};
exports.findAll = (req, res) => {
  console.log(req.body);
  console.log(req.UserId);
  Posts.findAll()

    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
exports.allPosts = (req, res) => {
  console.log(req.UserId);
  Posts.findAll({
    where: { UserId: req.UserId },
    include: [
      {
        model: Users,
        where: { id: req.UserId },
      },
    ],
  })
    .then((data) => {
      console.log(data);
      let post = [];
      data.forEach((element) => {
        let userPosts = {
          name: element.User.name,
          title: element.title,
          content: element.content,
          createdAt: element.createdAt,
        };
        post.push(userPosts);
      });
      console.log(post);

      res.status(200).json(post);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.deletePost = (req, res) => {
  Posts.destroy({
    where: {
      user_id: null,
    },
  }).then(() => {
    res.status(200).json({
      message: 'Posts with null user id has been deleted',
    });
  });
};
