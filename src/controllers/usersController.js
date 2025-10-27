const User = require("../models/User");

async function createUser(req, res) {
  try {
    const { name } = req.body;
    const exists = await User.findOne({ name });
    if (exists) return res.status(400).send("Usuário já cadastrado");

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { createUser, getAllUsers };
