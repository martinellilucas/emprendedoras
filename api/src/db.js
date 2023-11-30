require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_URL, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

/* const sequelize = new Sequelize(DB_URL, {
  logging: false,
  native: false,
}); */
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/emprendedoras`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Usuario, Emprendedora, Ciclo, Comentario, Producto } = sequelize.models;
Usuario.hasMany(Producto, { foreignKey: "id_usuario" });
Producto.belongsTo(Usuario);
Usuario.hasMany(Emprendedora, { foreignKey: "id_usuario" });
Emprendedora.belongsTo(Usuario);
Comentario.belongsTo(Emprendedora, { foreignKey: "codigoEmprendedora" });
Emprendedora.belongsToMany(Ciclo, {
  through: "EmprendedoraCiclo",
  timestamps: false,
});
Ciclo.belongsToMany(Emprendedora, {
  through: "EmprendedoraCiclo",
  timestamps: false,
});
module.exports = { ...sequelize.models, conn: sequelize };
