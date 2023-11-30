const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Producto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
    unidades: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.STRING,
    },
  });
};
