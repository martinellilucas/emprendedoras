const { Usuario } = require("../db");

const getUsuarioByEmail = async (email) => {
  const usuario = await Usuario.findOne({ where: { email } });

  return usuario;
};

module.exports = getUsuarioByEmail;
