const getUsuarios = require("../controllers/getUsuarios");

const handlerGetUsuarios = async (req, res) => {
  try {
    res.status(200).json(await getUsuarios());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUsuarios;
