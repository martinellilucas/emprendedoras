const postCiclo = require("../controllers/postCiclos");

const handlerPostCiclo = async (req, res) => {
  try {
    const { ciclo, puntos, codigoEmprendedora } = req.body;
    const cicloCreado = await postCiclo(ciclo, puntos, codigoEmprendedora);
    res.status(200).json(cicloCreado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostCiclo;
