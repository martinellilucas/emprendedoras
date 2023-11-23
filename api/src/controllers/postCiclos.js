const { Ciclo, Emprendedora } = require("../db");

const postCiclo = async (ciclo, puntos, codigoEmprendedora) => {
  await Ciclo.create({ ciclo, puntos });
  const emprendedora = await Emprendedora.findByPk(codigoEmprendedora);
  const cicloCreado = await Ciclo.findByPk(ciclo);
  await emprendedora.addCiclo(cicloCreado);

  return cicloCreado;
};

module.exports = postCiclo;
