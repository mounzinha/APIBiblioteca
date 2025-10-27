const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  birthDate: { type: Date, required: true },
  sex: { type: String, required: true },
  writingGenre: {
    type: String,
    required: true,
    enum: ["Novel", "Poetry", "Fantasy", "Fiction", "Mystery", "Suspense"],
  },
});

module.exports = mongoose.model("Author", authorSchema);
