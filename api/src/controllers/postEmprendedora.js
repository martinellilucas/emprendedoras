const { Emprendedora, Usuario } = require("../db");

const postEmprendedora = async (
  id,
  codigoEmprendedora,
  nombre,
  cicloAlta,
  otrasActividades,
  localidad,
  provincia,
  tel,
  categoria
) => {
  const newEmprendedora = await Emprendedora.create({
    codigoEmprendedora,
    nombre,
    cicloAlta,
    otrasActividades,
    localidad,
    provincia,
    tel,
    categoria,
  });
  const lider = await Usuario.findByPk(id);
  newEmprendedora.setUsuario(lider);
  return newEmprendedora;
};

module.exports = postEmprendedora;
