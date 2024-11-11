const express = require("express");
const { 
    createBudget, 
    getBudgets, 
    updateBudget, 
    deleteBudget 
} = require("../controllers/budgetController");

const router = express.Router();

// Budget Routes
router.post("/", createBudget);               // Add new budget
router.get("/", getBudgets);               // Get all budgets
router.put("/:id", updateBudget);          // Update budget by ID
router.delete("/:id", deleteBudget);       // Delete budget by ID

module.exports = router;
