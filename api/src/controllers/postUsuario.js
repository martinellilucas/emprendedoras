const { Usuario } = require("../db");

const postUsuario = async (nombre, email, emailVerified, picture) => {
  const usuario = await Usuario.findOrCreate({
    where: {
      nombre,
      email,
      emailVerified,
      picture,
    },
  });
  return usuario;
};

module.exports = postUsuario;
