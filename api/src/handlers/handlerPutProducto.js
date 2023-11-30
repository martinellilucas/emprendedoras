const putProducto = require("../controllers/putProducto");

const handlerPutProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, unidades } = req.body;
    const update = await putProducto(id, tipo, unidades);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutProducto;
