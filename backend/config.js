const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize(
  'groupmania',
  'postgres',
  'Troll007',
  // `
  // "${process.env.DB}",
  // "${process.env.DB_PASSWORD}",
  // "${process.env.DB_PASSWORD}"`,

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
db.authenticate()
  .then(() => {
    console.log('Database and tables Connected!');
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
