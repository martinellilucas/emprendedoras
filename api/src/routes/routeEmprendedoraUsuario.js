const { Router } = require("express");
const handlerGetEmprendedoras = require("../handlers/handlerGetEmprendedoras");

const routeEmprendedoraUsuario = Router();
routeEmprendedoraUsuario.use("/:id", handlerGetEmprendedoras);
module.exports = routeEmprendedoraUsuario;
