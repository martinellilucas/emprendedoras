const routeEmprendedora = require("./routeEmprendedora");

const { Router } = require("express");

const router = Router();

router.use("/emprendedoras", routeEmprendedora);

module.exports = router;
