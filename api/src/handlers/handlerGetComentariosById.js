const getComentariosById = require("../controllers/getComentariosById");

const handlerGetComentariosById = async (req, res) => {
  try {
    const { codigoEmprendedora } = req.params;
    const comentarios = await getComentariosById(codigoEmprendedora);
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetComentariosById;
