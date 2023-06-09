const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config');

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,

    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  imageUrl: {
    type: DataTypes.STRING,
    required: false,
    defaultValue: null,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  following: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  followers: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
});

module.exports = User;
