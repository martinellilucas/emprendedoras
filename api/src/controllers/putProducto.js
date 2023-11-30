const { Producto } = require("../db");

const putProducto = async (id, tipo, unidades) => {
  const producto = await Producto.findOne({
    where: {
      UsuarioId: id,
      tipo: tipo,
    },
  });
  const cuenta = parseInt(producto.unidades) + parseInt(unidades);
  const update = await producto.update({
    unidades: cuenta,
  });
  return update;
};

module.exports = putProducto;
