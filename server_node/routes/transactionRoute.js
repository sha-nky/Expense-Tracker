const express = require("express");
const { 
    createTransaction, 
    getAllTransactions, 
    updateTransaction, 
    deleteTransaction 
} = require("../controllers/transactionController");

const router = express.Router();

// Transaction Routes
router.post("/", createTransaction);          // Add new transaction
router.get("/:id", getAllTransactions);          // Get all transactions
router.put("/:id", updateTransaction);     // Update transaction by ID
router.delete("/:id", deleteTransaction);  // Delete transaction by ID

module.exports = router;
