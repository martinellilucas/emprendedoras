const { Router } = require("express");
const handlerPostComentario = require("../handlers/handlerPostComentario");
const handlerGetComentariosById = require("../handlers/handlerGetComentariosById");

const routeComentarios = Router();

routeComentarios.get("/:codigoEmprendedora", handlerGetComentariosById);
routeComentarios.post("/", handlerPostComentario);

module.exports = routeComentarios;
