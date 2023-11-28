const postEmprendedora = require("../controllers/postEmprendedora");

const handlerPostEmprendedora = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      codigoEmprendedora,
      nombre,
      cicloAlta,
      otrasActividades,
      localidad,
      provincia,
      tel,
      categoria,
    } = req.body;
    const emprendedora = await postEmprendedora(
      id,
      codigoEmprendedora,
      nombre,
      cicloAlta,
      otrasActividades,
      localidad,
      provincia,
      tel,
      categoria
    );
    res.status(200).json(emprendedora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostEmprendedora;
