const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config');
const User = require('./users');

// Define User model

// Define Post model
const Post = db.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    required: false,
    defaultValue: null,
  },
  readBy: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
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

// Define associations between models
User.hasMany(Post, {
  foreignKey: {
    type: DataTypes.UUID,
    allowNull: false,

    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  },
});
Post.belongsTo(User);

module.exports = Post;
