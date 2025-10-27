const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

// POST /authors - Cadastrar Autor
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await Author.findOne({ name });
    if (exists) return res.status(400).send("Autor já cadastrado");

    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /authors - Listar todos os autores
router.get("/", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
