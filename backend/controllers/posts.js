const Post = require('../models/posts');
const User = require('../models/users');

exports.createPost = (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  // console.log('este headers : ' + req.getHeaderNames());
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
  console.log(req.headers.authorization);
  const uniquePost = await Post.findAll({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        right: true,
      },
    ],
  });

  if (uniquePost === null) {
    console.log('not found');
  } else {
    res.status(200).json(uniquePost);
  }
};
exports.findAll = async (req, res) => {
  try {
    Post.findAll({
      include: [User],
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

exports.allPosts = (req, res) => {
  console.log(req.UserId);
  Post.findAll({
    where: { UserId: req.body.userId },
    include: [
      {
        model: User,
        right: true,
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
  //.then((post) => {
  //   // console.log(req.body);
  //   switch (req.body.like) {
  //     case 1:
  //       console.log('Likes' + post);
  //       if (!post.usersLiked.includes(req.body.userId)) {
  //         post.likes++;
  //         post.usersLiked.push(req.body.userId);
  //       }

  //       break;
  //     case 0:
  //       if (post.usersLiked.includes(req.body.userId)) {
  //         post.usersLiked.splice(post.usersLiked.indexOf(req.body.userId, 1));
  //         console.log('canceled');
  //         post.likes--;
  //       } else if (post.usersDisliked.includes(req.body.userId)) {
  //         post.usersDisliked.splice(
  //           post.usersDisliked.indexOf(req.body.userId, 1)
  //         );
  //         post.dislikes--;
  //       }

  //       break;
  //     case -1:
  //       if (!post.usersDisliked.includes(req.body.userId)) {
  //         post.dislikes++;
  //         post.usersDisliked.push(req.body.userId);
  //       }

  //       // console.log('disliked');
  //       break;

  //     default:
  //       break;
  //   }

  //   res.status(200).json(post);
  // });
};

//   Post.findOne({ _id: req.params.id }).then((sauce) => {

//     sauce
//       .save()

//       .then(() => {
//         res.status(201).json({
//           message: 'Post saved successfully!',
//         });
//       })
//       .catch((error) => {
//         res.status(400).json({
//           error: error,
//         });
//       });
//   });
// };
