const express = require("express");
const router = express.Router();
const { createLoan } = require("../controllers/loansController");

router.post("/", createLoan);

module.exports = router;
