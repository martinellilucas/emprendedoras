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
    unidades: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
