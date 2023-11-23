const { Emprendedora, Ciclo, EmprendedoraCiclo } = require("../db");

const getEmprendedoraById = async (codigoEmprendedora) => {
  const emprendedora = await Emprendedora.findByPk(codigoEmprendedora, {
    include: {
      model: Ciclo,
      through: {
        model: EmprendedoraCiclo,
      },
    },
  });

  return emprendedora;
};

module.exports = getEmprendedoraById;
