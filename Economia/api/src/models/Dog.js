const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dolar",
    {
      value_avg: {
        type: DataTypes.STRING,
        allowNull: false, //no permite valores nulos.
      },
      value_sell: {
        type: DataTypes.STRING,
        allowNull: false, //no permite valores nulos.
      },
     
    },
    { timestamps: true, createdAt: "creado", updatedAt: false }
  ); //marca de tiempo: true = MONGOOSE agrega dos propiedades de tipo fecha a su esquema: createAt: fecha que representa el momento en el que se creo el documento, updateAt(actualizado en) fecha ultima actualizacion.
};