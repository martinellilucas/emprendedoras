const { Router } = require("express");
const handlerPostUsuario = require("../handlers/handlerPostUsuario");
const handlerGetUsuarioByEmail = require("../handlers/handlerGetUsuarioByEmail");
const handlerGetUsuarios = require("../handlers/handlerGetUsuarios");

const routeUsuario = Router();
routeUsuario.get("/", handlerGetUsuarios);
routeUsuario.post("/", handlerPostUsuario);
routeUsuario.get("/:email", handlerGetUsuarioByEmail);

module.exports = routeUsuario;
