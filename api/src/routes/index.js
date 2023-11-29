const routeCiclos = require("./routeCiclos");
const routeComentarios = require("./routeComentarios");
const routeEmprendedora = require("./routeEmprendedora");
const routeEmprendedoraUsuario = require("./routeEmprendedoraUsuario");
const routeUsuario = require("./routeUsuario");

const { Router } = require("express");

const router = Router();

router.use("/emprendedoras", routeEmprendedora);
router.use("/comentarios", routeComentarios);
router.use("/ciclos", routeCiclos);
router.use("/usuarios", routeUsuario);
router.use("/emprendedorasusuario", routeEmprendedoraUsuario);

module.exports = router;
