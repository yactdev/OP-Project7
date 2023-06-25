const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new user

exports.signUp = async (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  console.log(req.body);
  bcrypt.hash(req.body.password, 10).then((hash) => {
    if (req.file) {
      User.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        imageUrl: url + '/images/' + req.file.filename,
        bio: req.body.bio,
      })
        .then(() => {
          res.status(200).json('User has been created');
        })
        .catch((err) => {
          res.status(401).json({
            error: err,
            message: 'An unexpected error has occurred...',
          });
        });
    } else {
      console.log(req.body);
      User.create({
        name: req.body.name,
        lastName: req.lastName,
        email: req.body.email,
        password: hash,
        imageUrl: null,
        bio: req.body.bio,
      })
        .then(() => {
          res.status(200).json('User has been created');
        })
        .catch((err) => {
          res.status(401).json({
            error: err,
            message: 'An unexpected error has occurred...',
          });
        });
    }
  });
};

exports.signIn = async (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!'),
            });
          }

          const token = jwt.sign({ userid: user.id }, 'RANDOM_TOKEN_SECRET', {
            expiresIn: '24h',
          });

          res.status(200).json({
            userid: user.id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An unexpected error has occurred.',
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      console.table(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getUserById = async (req, res) => {
  try {
    User.findByPk(req.params.id).then((data) => {
      res.status(200).json(data);
    });
  } catch {
    (error) => {
      console.log(error);
    };
  }
};

exports.deleteUser = (req, res) => {
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
