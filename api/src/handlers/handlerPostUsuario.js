const postUsuario = require("../controllers/postUsuario");

const handlerPostUsuario = async (req, res) => {
  try {
    const { name, email, email_verified, picture } = req.body;
    const usuario = await postUsuario(name, email, email_verified, picture);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostUsuario;
