const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

const db = new Sequelize(
  process.env.DB,
  process.env.DB_PASSWORD,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = db;
