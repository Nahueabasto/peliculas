const { DataTypes } = require('sequelize');
//const sequelize = require('../config/database');

module.exports = (sequelize) => {

sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdInDb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});
}
