const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const getDolar = require("./getDolar");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getDolar);


module.exports = router;

