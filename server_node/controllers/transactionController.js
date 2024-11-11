const transactionModel = require("../models/transactions");

async function createTransaction(req, res) {
  try {
    const { user_id, type, amount, category, date, transaction_to  } = req.body;

    if (!user_id || !type || !amount || !category || !transaction_to) {
      return res.status(400).json({ msg: "Required fields are missing" });
    }

    const transaction = await transactionModel.create({
      user_id,
      type,
      amount,
      category,
      date: date || new Date(),
      transaction_to,
    });

    res.status(201).json({ message: "Transaction created successfully!", transaction });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function getAllTransactions(req, res) {
  try {
    const { user_id } = req.query;
    const transactions = await transactionModel.find({ user_id });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function updateTransaction(req, res) {
  try {
    const { transaction_id } = req.params;
    const updateData = req.body;

    const updatedTransaction = await transactionModel.findByIdAndUpdate(transaction_id, updateData, { new: true });
    res.status(200).json({ message: "Transaction updated successfully!", updatedTransaction });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function deleteTransaction(req, res) {
  try {
    const { transaction_id } = req.params;
    await transactionModel.findByIdAndDelete(transaction_id);
    res.status(200).json({ message: "Transaction deleted successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

module.exports = {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction
};
