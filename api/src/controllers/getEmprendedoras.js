const { Emprendedora } = require("../db");

const getEmprendedoras = async (id) => {
  const emprendedoras = await Emprendedora.findAll();
  return emprendedoras;
};

module.exports = getEmprendedoras;
