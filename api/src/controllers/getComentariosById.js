const { Comentario } = require("../db");

const getComentariosById = async (codigoEmprendedora) => {
  const comentarios = await Comentario.findAll({
    where: { codigoEmprendedora: codigoEmprendedora },
  });

  return comentarios;
};

module.exports = getComentariosById;
