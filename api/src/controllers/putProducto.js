const { Producto } = require("../db");

const putProducto = async (userid, id, unidades) => {
  const producto = await Producto.findOne({
    where: {
      UsuarioId: userid,
      id: id,
    },
  });
  const cuenta = parseInt(producto.unidades) + parseInt(unidades);
  const update = await producto.update({
    unidades: cuenta,
  });
  return update;
};

module.exports = putProducto;
