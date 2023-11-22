const { Comentario, Emprendedora } = require("../db");

const postComentario = async (codigoEmprendedora, autor, texto) => {
  const emprendedora = await Emprendedora.findOne({
    where: { codigoEmprendedora: codigoEmprendedora },
  });
  const comentario = await Comentario.create({ autor, texto });

  await comentario.setEmprendedora(emprendedora);
};

module.exports = postComentario;
