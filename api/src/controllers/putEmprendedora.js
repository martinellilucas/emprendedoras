const { Emprendedora } = require("../db");

const putEmprendedora = async (
  codigoEmprendedora,
  otrasActividades,
  categoria
) => {
  const emprendedora = await Emprendedora.update(
    {
      otrasActividades: otrasActividades,
      categoria: categoria,
    },
    { where: { codigoEmprendedora: codigoEmprendedora } }
  );
  return emprendedora;
};

module.exports = putEmprendedora;
