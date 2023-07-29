const express = require('express');
const router = express.Router();
const { Note } = require('../db.js');

// Ruta para obtener todas las notas archivadas
router.get('/', async (req, res) => {
  try {
    const archivedNotes = await Note.findAll({ where: { archived: true } });
    res.json(archivedNotes);
  } catch (error) {
    res.status(500).json({ error: 'Error getting archived notes' });
  }
});


module.exports = router;
