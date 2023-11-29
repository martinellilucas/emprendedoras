const getEmprendedoras = require("../controllers/getEmprendedoras");

const handlerGetEmprendedoras = async (req, res) => {
  try {
    const { id } = req.params;
    const emprendedoras = await getEmprendedoras(id);
    res.status(200).json(emprendedoras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetEmprendedoras;
