const postProducto = require("../controllers/postProducto");

const handlerPostProductos = async (req, res) => {
  try {
    const { userid } = req.params;
    const { tipo, unidades } = req.body;
    const post = await postProducto(userid, tipo, unidades);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostProductos;
