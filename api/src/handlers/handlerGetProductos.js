const getProductos = require("../controllers/getProductos");

const handlerGetProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const productos = await getProductos(id);
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetProductos;
