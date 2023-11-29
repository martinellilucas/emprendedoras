const { Emprendedora, Usuario } = require("../db");

const getEmprendedoras = async (id) => {
  const emprendedoras = await Emprendedora.findAll({
    where: {
      id_usuario: id,
    },
  });
  return emprendedoras;
};

module.exports = getEmprendedoras;
