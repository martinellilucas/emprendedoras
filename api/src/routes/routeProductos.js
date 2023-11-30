const { Router } = require("express");

const handlerGetProductos = require("../handlers/handlerGetProductos");
const handlerPostProductos = require("../handlers/handlerPostProducto");
const handlerPutProducto = require("../handlers/handlerPutProducto");

const routeProductos = Router();
routeProductos.get("/:userid", handlerGetProductos);
routeProductos.post("/:userid", handlerPostProductos);
routeProductos.put("/:userid", handlerPutProducto);

module.exports = routeProductos;
