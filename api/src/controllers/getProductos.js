const { Producto } = require("../db");

const getProductos = async (userid) => {
  const productos = await Producto.findAll({ where: { UsuarioId: userid } });
  return productos;
};

module.exports = getProductos;
