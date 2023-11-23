const { Ciclo, Emprendedora } = require("../db");

const postCiclo = async (ciclo, puntos, codigoEmprendedora) => {
  const nuevoCiclo = await Ciclo.create({ ciclo, puntos });
  const emprendedora = await Emprendedora.findByPk(codigoEmprendedora);

  await emprendedora.addCiclo(nuevoCiclo);

  return nuevoCiclo;
};

module.exports = postCiclo;
