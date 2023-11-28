const getUsuarioByEmail = require("../controllers/getUsuarioByEmail");

const handlerGetUsuarioByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await getUsuarioByEmail(email);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUsuarioByEmail;
