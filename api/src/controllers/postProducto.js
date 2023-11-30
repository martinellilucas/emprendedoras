const { Producto, Usuario } = require("../db");

const postProducto = async (userid, tipo, unidades) => {
  const post = await Producto.create({ tipo, unidades });
  const usuario = await Usuario.findByPk(id);

  await post.setUsuario(usuario);
  return post;
};

module.exports = postProducto;
