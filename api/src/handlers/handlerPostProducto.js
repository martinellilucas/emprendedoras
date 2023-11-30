const postProducto = require("../controllers/postProducto");

const handlerPostProductos = async (req, res) => {
  try {
    const { userid } = req.params;
    const { tipo, color, unidades, comentario } = req.body;
    const post = await postProducto(userid, tipo, color, unidades, comentario);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostProductos;
