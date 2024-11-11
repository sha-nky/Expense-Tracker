const express = require("express");
const { 
    createExpense, 
    getExpenses, 
    updateExpense, 
    deleteExpense 
} = require("../controllers/expenseController");

const router = express.Router();

// Expense Routes
router.post("/", createExpense);              // Add new expense
router.get("/", getExpenses);              // Get all expenses
router.put("/:id", updateExpense);         // Update expense by ID
router.delete("/:id", deleteExpense);      // Delete expense by ID

module.exports = router;
