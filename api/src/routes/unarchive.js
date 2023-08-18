const { Router } = require("express");
const router = Router();
const { Note } = require("../db.js")

router.put('/unarchive/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const note = await Note.findByPk(id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      note.archived = false; // Desarchivar la nota estableciendo la propiedad 'archived' en false
      await note.save();
      res.json(note);
    } catch (error) {
      res.status(500).json({ error: 'Error unarchiving note' });
    }
  });
  
  module.exports = router;