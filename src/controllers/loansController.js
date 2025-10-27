const Book = require("../models/Book");
const Loan = require("../models/Loan");
const User = require("../models/User");

async function createLoan(req, res) {
  const { userId, bookId } = req.body;

  const user = await User.findById(userId);
  const book = await Book.findById(bookId);

  if (!user || !book)
    return res.status(404).send("Usuário ou livro não encontrado");

  const today = new Date();
  const expectedReturn = new Date(today);
  expectedReturn.setDate(today.getDate() + 3);

  if (!book.isAvailable && book.expectedReturnDate > today) {
    return res.status(400).send("Livro já está emprestado");
  }

  await Loan.create({
    user: user.name,
    book: book.title,
    loanDate: today.toISOString(),
    returnDate: expectedReturn.toISOString(),
  });

  book.isAvailable = false;
  book.expectedReturnDate = expectedReturn;
  await book.save();

  res.status(201).send("Empréstimo realizado com sucesso");
}

module.exports = { createLoan };
