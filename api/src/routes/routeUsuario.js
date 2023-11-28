const { Router } = require("express");
const handlerPostUsuario = require("../handlers/handlerPostUsuario");
const handlerGetUsuarioByEmail = require("../handlers/handlerGetUsuarioByEmail");

const routeUsuario = Router();

routeUsuario.post("/", handlerPostUsuario);
routeUsuario.get("/:email", handlerGetUsuarioByEmail);

module.exports = routeUsuario;
