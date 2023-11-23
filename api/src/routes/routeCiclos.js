const { Router } = require("express");

const handlerPostCiclo = require("../handlers/handlerPostCiclo");

const routeCiclos = Router();

routeCiclos.post("/", handlerPostCiclo);

module.exports = routeCiclos;
