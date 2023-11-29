const { Router } = require("express");

const handlerPostCiclo = require("../handlers/handlerPostCiclo");
const handlerGetAllCiclos = require("../handlers/handlerGetAllCiclos");

const routeCiclos = Router();

routeCiclos.post("/", handlerPostCiclo);
routeCiclos.get("/", handlerGetAllCiclos);

module.exports = routeCiclos;
