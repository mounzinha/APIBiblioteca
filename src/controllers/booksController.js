const Book = require("../models/Book");

async function createBook(req, res) {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { createBook, getAllBooks };
