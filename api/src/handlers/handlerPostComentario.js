const postComentario = require("../controllers/postComentario");

const handlerPostComentario = async (req, res) => {
  try {
    const { codigoEmprendedora, autor, texto } = req.body;
    const response = await postComentario(codigoEmprendedora, autor, texto);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostComentario;
