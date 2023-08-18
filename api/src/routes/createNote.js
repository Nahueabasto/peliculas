const { Router } = require("express");
const router = Router();
const { Note } = require("../db.js")

router.post('/' ,async (req, res) => {
    const { title, content } = req.body;
    try {
      const note = await Note.create({ title, content });
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Error creating note' });
    }
  });

  module.exports = router;