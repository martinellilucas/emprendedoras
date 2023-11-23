const routeCiclos = require("./routeCiclos");
const routeComentarios = require("./routeComentarios");
const routeEmprendedora = require("./routeEmprendedora");

const { Router } = require("express");

const router = Router();

router.use("/emprendedoras", routeEmprendedora);
router.use("/comentarios", routeComentarios);
router.use("/ciclos", routeCiclos);

module.exports = router;
