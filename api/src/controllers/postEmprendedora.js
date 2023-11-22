const { Emprendedora } = require("../db");

const postEmprendedora = async (
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
  return newEmprendedora;
};

module.exports = postEmprendedora;
