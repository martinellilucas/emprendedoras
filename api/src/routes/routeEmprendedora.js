const { Router } = require("express");
const handlerGetEmprendedoras = require("../handlers/handlerGetEmprendedoras");
const handlerGetEmprendedoraById = require("../handlers/handlerGetEmprendedoraById");
const handlerPostEmprendedora = require("../handlers/handlerPostEmprendedora");
const handlerPutEmprendedora = require("../handlers/handlerPutEmprendedora");

const routeEmprendedora = Router();

routeEmprendedora.get("/", handlerGetEmprendedoras);
routeEmprendedora.get("/:codigoEmprendedora", handlerGetEmprendedoraById);
routeEmprendedora.post("/", handlerPostEmprendedora);
routeEmprendedora.put("/:codigoEmprendedora", handlerPutEmprendedora);

module.exports = routeEmprendedora;