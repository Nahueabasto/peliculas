const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Categoty', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
  // Relación con la tabla Note
 
  
 
  