const mongoose = require("mongoose");
require("dotenv").config();

const models = ["Author", "User", "Book", "Loan"];

async function resetCollections() {
  await mongoose.connect(process.env.MONGO_URI);
  for (const model of models) {
    await mongoose.connection.db
      .dropCollection(model.toLowerCase() + "s")
      .catch(() => {});
    await mongoose.connection.createCollection(model.toLowerCase() + "s");
  }
  console.log("Coleções resetadas");
  process.exit();
}

resetCollections();
