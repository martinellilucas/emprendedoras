const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Emprendedora", {
    codigoEmprendedora: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cicloAlta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    otrasActividades: {
      type: DataTypes.STRING,
    },
    localidad: {
      type: DataTypes.STRING,
    },
    provincia: {
      type: DataTypes.STRING,
    },
    tel: {
      type: DataTypes.STRING,
      unique: true,
    },
    categoria: {
      type: DataTypes.ENUM,
      values: ["Naranja", "Amarillo", "Verde", "Celeste"],
    },
  });
};
