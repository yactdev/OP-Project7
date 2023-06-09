// Define Comment model
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config');
const Post = require('../models/posts');

const Comment = db.define('Comment', {
  comment_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

Post.hasMany(Comment, {
  foreignKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Comment.belongsTo(Post);

module.exports = Comment;
