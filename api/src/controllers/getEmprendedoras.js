const { Emprendedora } = require("../db");

const getEmprendedoras = async () => {
  return await Emprendedora.findAll();
};

module.exports = getEmprendedoras;
