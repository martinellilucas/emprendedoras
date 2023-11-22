const { Emprendedora } = require("../db");

const getEmprendedoraById = async (codigoEmprendedora) => {
  const emprendedora = await Emprendedora.findByPk(codigoEmprendedora);

  return emprendedora;
};

module.exports = getEmprendedoraById;
