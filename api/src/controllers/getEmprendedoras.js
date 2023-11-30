const { Emprendedora } = require("../db");

const getEmprendedoras = async (id) => {
  const emprendedoras = await Emprendedora.findAll({
    where: { UsuarioId: id },
  });
  return emprendedoras;
};

module.exports = getEmprendedoras;
