const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Ciclo", {
    ciclo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
  });
};
