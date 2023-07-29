const { Router } = require("express");
const router = Router();
const { Note } = require("../db.js")


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const note = await Note.findByPk(id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.json(note);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching note' });
    }
  });
  
  module.exports = router;