const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /users - Cadastrar Usuário
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await User.findOne({ name });
    if (exists) return res.status(400).send("Usuário já cadastrado");

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET /users - Listar todos os usuários
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
