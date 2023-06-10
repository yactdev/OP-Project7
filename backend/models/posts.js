const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config');
const User = require('../models/users');

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
});

// // Define Vote model
// const Vote = db.define('Vote', {
//   vote_id: {
//     type: DataTypes.UUID,

//     primaryKey: true,
//   },
//   vote_type: {
//     type: DataTypes.ENUM('upvote', 'downvote'),
//     allowNull: false,
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//   },
// });

// Define associations between models
User.hasMany(Post, {
  foreignKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
Post.belongsTo(User);

// User.hasMany(Comment, { foreignKey: 'user_id' });
// Comment.belongsTo(User, { foreignKey: 'user_id' });

// Comment.hasMany(Comment, { foreignKey: 'parent_comment_id' });
// Comment.belongsTo(Comment, { foreignKey: 'parent_comment_id' });

// User.hasMany(Vote, { foreignKey: 'user_id' });
// Vote.belongsTo(User, { foreignKey: 'user_id' });

// Post.hasMany(Vote, { foreignKey: 'post_id' });
// Vote.belongsTo(Post, { foreignKey: 'post_id' });

// Comment.hasMany(Vote, { foreignKey: 'comment_id' });
// Vote.belongsTo(Comment, { foreignKey: 'comment_id' });

// Synchronize models with database

module.exports = Post;
