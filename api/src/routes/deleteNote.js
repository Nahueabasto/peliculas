const { Router } = require("express");
const router = Router();
const { Note } = require("../db.js")


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    await note.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting note' });
  }
});

  module.exports = router;