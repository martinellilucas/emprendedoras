const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Comentario", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
