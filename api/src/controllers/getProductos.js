const { Producto } = require("../db");

const getProductos = async (id) => {
  const productos = await Producto.findAll({ where: { UsuarioId: id } });
  return productos;
};

module.exports = getProductos;
