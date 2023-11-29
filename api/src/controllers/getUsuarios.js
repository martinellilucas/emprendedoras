const { Usuario } = require("../db");

const getUsuarios = async () => {
  return await Usuario.findAll();
};

module.exports = getUsuarios;
