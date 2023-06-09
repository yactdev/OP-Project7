const User = require('../models/users');
const express = require('express');
const { stringify } = require('qs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Create a new user

exports.singUp = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');

  bcrypt.hash(req.body.password, 10).then((hash) => {
    console.log(req.body);
    const user = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      imageUrl: req.body.avatar,
      bio: req.body.bio,
    };

    User.create(user)
      .then(() => {
        res.status(200).json('User has been created');
      })
      .catch((err) => {
        res.status(401).json({ message: 'An unexpected error has occurred.' });
      });
  });
};
exports.singIn = async (req, res) => {
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
  console.log(req.body);
  User.findAll()
    .then((data) => {
      console.table(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
