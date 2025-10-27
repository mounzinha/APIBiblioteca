const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// POST /books - Cadastrar Livro
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /books - Listar todos os livros
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
