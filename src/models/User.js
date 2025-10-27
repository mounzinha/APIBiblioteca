const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  birthDate: { type: Date, required: true },
  sex: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
