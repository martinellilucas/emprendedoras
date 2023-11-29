const { Ciclo, Emprendedora } = require("../db");

const getAllCiclos = async () => {
  const allCiclos = await Ciclo.findAll({
    include: [
      {
        model: Emprendedora,
        through: { atributes: [] },
      },
    ],
  });

  allCiclos.sort((a, b) => {
    if (a.ciclo > b.ciclo) {
      return -1;
    }
    if (a.ciclo < b.ciclo) {
      return 1;
    }
    return 0;
  });
  return allCiclos;
};

module.exports = getAllCiclos;
