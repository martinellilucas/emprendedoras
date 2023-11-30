const { Producto, Usuario } = require("../db");

const postProducto = async (userid, tipo, color, unidades, comentario) => {
  const post = await Producto.create({
    tipo: tipo,
    color: color,
    unidades: unidades,
    comentario: comentario,
  });
  const usuario = await Usuario.findByPk(userid);

  await post.setUsuario(usuario);
  return post;
};

module.exports = postProducto;
