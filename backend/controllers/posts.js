const Post = require('../models/posts');
const User = require('../models/users');
const Comment = require('../models/comments');

exports.createPost = (req, res) => {
  const url = req.protocol + '://' + req.get('host');

  Post.create(
    {
      title: req.body.title,
      content: req.body.content,
      imageUrl: url + '/images/' + req.file.filename,
      UserId: req.body.userId,
    },
    [
      {
        association: Post.belongsTo(User),
        include: [User.hasMany(Post)],
      },
    ]
  )
    .then(() => {
      console.log('Post has been created');
      res.status(200).json({
        message: 'The post has been created',
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Something wrong happend while update the DB',
        error: err,
      });
    });
};
exports.getPostById = async (req, res) => {
  try {
    Post.findByPk(req.params.id, {
      include: {
        model: User,
        model: Comment,
      },
    }).then((data) => {
      res.status(200).json(data);
    });
  } catch {
    (error) => {
      console.log(error);
    };
  }
};
exports.findAll = async (req, res) => {
  try {
    Post.findAll({
      include: [User, Comment],
    }).then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  } catch {
    (error) => {
      console.log(error);
    };
  }
};

exports.deletePost = async (req, res) => {
  await Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'Posts number: ' + req.params.id + 'has been deleted',
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Something wrong happend while update the DB',
        error: err,
      });
    });
};

exports.updatePost = async (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  try {
    await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
        imageUrl: url + '/images/' + req.file.filename,
        UserId: req.body.userId,
      },

      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => {
      res.status(200).json('done');
    });
  } catch (err) {
    res.status(404).json({
      message: 'Something wrong happend while update the DB',
      error: err,
    });
  }
};

// Likes

exports.likes = async (req, res) => {
  console.log(req.body);
  try {
    Post.findByPk(req.params.id).then((like) => {
      switch (req.body.like) {
        case 1:
          if (!like.usersLiked.includes(req.body.UserId)) {
            like.likes++;
            // TODO
            // To save an array field with Sequelize in postgres you should use this syntax...
            like.usersLiked = [...like.usersLiked, req.body.UserId];

            // Instead use  array.push
            // like.usersLiked.push(req.body.UserId);

            console.log('Likes' + like);
          }

          break;
        case 0:
          if (like.usersLiked.includes(req.body.UserId)) {
            like.usersLiked.splice(like.usersLiked.indexOf(req.body.UserId, 1));
            console.log('canceled');
            like.likes--;
          } else if (like.usersDisliked.includes(req.body.UserId)) {
            like.usersDisliked.splice(
              like.usersDisliked.indexOf(req.body.UserId, 1)
            );
            like.dislikes--;
          }

          break;
        case -1:
          if (!like.usersDisliked.includes(req.body.UserId)) {
            like.dislikes++;
            like.usersDisliked = [...like.usersDisliked, req.body.UserId];
          }

          // console.log('disliked');
          break;

        default:
          break;
      }
      res.status(201).json(like);
      return like.save();
    });
  } catch (error) {
    console.error('Error al buscar y actualizar el registro:', error);
  }
};

exports.readBy = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  req.params.id;
  try {
    Post.findByPk(req.params.id).then((post) => {
      if (!post.readBy.includes(req.body.userid)) {
        post.readBy = [...post.readBy, req.body.userid];
      }
      res.status(201).json(post);
      return post.save();
    });
  } catch {}
};
