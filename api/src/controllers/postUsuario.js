const { Usuario } = require("../db");

const postUsuario = async (name, email, email_verified, picture) => {
  const usuario = await Usuario.findOrCreate({
    where: {
      nombre: name,
      email: email,
      emailVerified: email_verified,
      picture: picture,
    },
  });
  return usuario;
};

module.exports = postUsuario;
