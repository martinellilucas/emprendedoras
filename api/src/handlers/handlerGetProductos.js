const getProductos = require("../controllers/getProductos");

const handlerGetProductos = async (req, res) => {
  try {
    const { userid } = req.params;
    const productos = await getProductos(userid);
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetProductos;
