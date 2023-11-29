const getEmprendedoraById = require("../controllers/getEmprendedoraById");

const handlerGetEmprendedoraById = async (req, res) => {
  try {
    const { codigoEmprendedora } = req.body;
    const emprendedora = await getEmprendedoraById(codigoEmprendedora);

    res.status(200).json(emprendedora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetEmprendedoraById;
