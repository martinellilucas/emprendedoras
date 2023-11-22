const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Ciclo", {
    ciclo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    puntos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
