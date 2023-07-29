const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const getAllNotes = require("./getAllNotes");
const createNote = require("./createNote")
const unarchive = require("./unarchive")
const archivedNotesRoutes = require("./archivedNotesRoutes")
const getNoteById = require("./getNoteById")
const updateNote = require("./updateNote")
const deleteNote = require("./deleteNote")
const archived = require("./archived")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getAllNotes);
router.use("/", createNote);
router.put("/unarchive/:id", unarchive);
router.use("/archived", archivedNotesRoutes);
router.use("/:id", getNoteById);
router.use("/:id", updateNote);
router.use("/:id", deleteNote);
router.put("/archive/:id", archived);



module.exports = router;
