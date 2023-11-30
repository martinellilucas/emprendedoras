const { Router } = require("express");

const handlerGetProductos = require("../handlers/handlerGetProductos");
const handlerPostProductos = require("../handlers/handlerPostProducto");
const handlerPutProducto = require("../handlers/handlerPutProducto");

const routeProductos = Router();
routeProductos.get("/:id", handlerGetProductos);
routeProductos.post("/:id", handlerPostProductos);
routeProductos.put("/:id", handlerPutProducto);

module.exports = routeProductos;
