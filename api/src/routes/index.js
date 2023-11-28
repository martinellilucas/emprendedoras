const routeCiclos = require("./routeCiclos");
const routeComentarios = require("./routeComentarios");
const routeEmprendedora = require("./routeEmprendedora");
const routeUsuario = require("./routeUsuario");

const { Router } = require("express");

const router = Router();

router.use("/emprendedoras", routeEmprendedora);
router.use("/comentarios", routeComentarios);
router.use("/ciclos", routeCiclos);
router.use("/usuarios", routeUsuario);

module.exports = router;
