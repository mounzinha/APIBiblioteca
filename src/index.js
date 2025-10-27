require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Rotas
app.use("/authors", require("./routes/authors"));
app.use("/users", require("./routes/users"));
app.use("/books", require("./routes/books"));
app.use("/loans", require("./routes/loans"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
