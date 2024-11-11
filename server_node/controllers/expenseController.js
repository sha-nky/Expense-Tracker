const expenseModel = require("../models/expenses");

async function createExpense(req, res) {
  try {
    const { user_id, amount, category, date, description, location, payment_method } = req.body;

    if (!user_id || !amount || !category) {
      return res.status(400).json({ msg: "Required fields are missing" });
    }

    const expense = await expenseModel.create({
      user_id,
      amount,
      category,
      date: date || new Date(),
      description,
      location,
      payment_method
    });

    res.status(201).json({ message: "Expense created successfully!", expense });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function getExpenses(req, res) {
  try {
    const { user_id } = req.query;
    const expenses = await expenseModel.find({ user_id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function updateExpense(req, res) {
  try {
    const { expense_id } = req.params;
    const updateData = req.body;

    const updatedExpense = await expenseModel.findByIdAndUpdate(expense_id, updateData, { new: true });
    res.status(200).json({ message: "Expense updated successfully!", updatedExpense });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function deleteExpense(req, res) {
  try {
    const { expense_id } = req.params;
    await expenseModel.findByIdAndDelete(expense_id);
    res.status(200).json({ message: "Expense deleted successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};
