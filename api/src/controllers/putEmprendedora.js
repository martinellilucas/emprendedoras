const { Emprendedora } = require("../db");

const putEmprendedora = async (
  codigoEmprendedora,
  otrasActividades,
  categoria
) => {
  const emprendedora = await Emprendedora.findOne({
    where: { codigoEmprendedora },
  });
  const actividades = emprendedora.otrasActividades.concat(otrasActividades);
  const emprendedoraUpdate = await Emprendedora.update(
    {
      otrasActividades: [...actividades],
      categoria: categoria,
    },
    { where: { codigoEmprendedora: codigoEmprendedora } }
  );
  return emprendedoraUpdate;
};

module.exports = putEmprendedora;
