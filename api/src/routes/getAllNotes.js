const { Router } = require("express");
const router = Router();
const { Note } = require("../db.js")

router.get('/', async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { archived: false } });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
});

module.exports = router;