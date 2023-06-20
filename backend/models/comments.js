// Define Comment model
const { Sequelize, DataTypes } = require('sequelize');
const Post = require('../models/posts');
const User = require('../models/users');
const db = require('../config');

const Comment = db.define('Comment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    required: false,
    defaultValue: 0,
  },
  dislikes: {
    type: DataTypes.INTEGER,
    required: false,
    defaultValue: 0,
  },
  usersLiked: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  usersDisliked: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
});

Post.hasMany(Comment, {
  foreignKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
Comment.belongsTo(Post);
User.hasMany(Comment, {
  foreignKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
Comment.belongsTo(User);

module.exports = Comment;
