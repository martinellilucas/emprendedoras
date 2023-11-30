const putProducto = require("../controllers/putProducto");

const handlerPutProducto = async (req, res) => {
  try {
    const { userid } = req.params;
    const { id, unidades, comentario } = req.body;
    const update = await putProducto(userid, id, unidades, comentario);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutProducto;
