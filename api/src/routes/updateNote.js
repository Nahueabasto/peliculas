const express = require('express');
const router = express.Router();
const { Note } = require('../db.js');

// Ruta para archivar una nota
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    note.archived = true; // Establecer archived en true para archivar la nota
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Error archiving note' });
  }
});

module.exports = router;
