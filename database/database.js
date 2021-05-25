const { Sequelize } = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', '123456', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

module.exports = connection;