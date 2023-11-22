const putEmprendedora = require("../controllers/putEmprendedora");

const handlerPutEmprendedora = async (req, res) => {
  try {
    const { otrasActividades, categoria } = req.body;
    const { codigoEmprendedora } = req.params;
    const emprendedora = await putEmprendedora(
      codigoEmprendedora,
      otrasActividades,
      categoria
    );
    res.status(200).json(emprendedora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutEmprendedora;
