const { DataTypes, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false, // Desactiva los timestamps
    }
  );
};
