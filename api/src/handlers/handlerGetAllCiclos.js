const getAllCiclos = require("../controllers/getAllCiclos");

const handlerGetAllCiclos = async (req, res) => {
  try {
    const allCiclos = await getAllCiclos();
    res.status(200).json(allCiclos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllCiclos;
