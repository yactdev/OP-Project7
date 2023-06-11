const Post = require('../models/posts');
const User = require('../models/users');

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

exports.findAll = (req, res) => {
  Post.findAll({
    include: [User],
  })

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

exports.deletePost = (req, res) => {
  Post.destroy({
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

exports.updatePost = (req, res) => {};
//   const url = req.protocol + '://' + req.get('host');

//   Post.findByPk(req.params.id).then((posted) => {
//     console.log('este es Psot: ' + posted);
//     const filename = posted.imageUrl.split('/images/')[1];

//   if (req.file) {
//     fs.unlinkSync(`images/${filename}`)
//     .then(() => {
//       req.body.imageUrl = url + '/images/' + req.file.filename;
//     });
//     console.log('Local file has been deleted sucessfuly');
//   }
//   }

//   Post.save(
//     {
//       title: req.body.title,
//       content: req.body.content,
//       imageUrl: url + '/images/' + req.file.filename,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((data) => {
//       Post.afterSave();
//       res.status(200).json(data.userId);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
