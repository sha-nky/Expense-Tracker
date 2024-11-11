const budgetModel = require("../models/budgets");

async function createBudget(req, res) {
  try {
    const { user_id, category, amount_limit, start_date, end_date } = req.body;

    if (!user_id || !category || !amount_limit) {
      return res.status(400).json({ msg: "Required fields are missing" });
    }

    const budget = await budgetModel.create({
      user_id,
      category,
      amount_limit,
      start_date: start_date || new Date(),
      end_date
    });

    res.status(201).json({ message: "Budget created successfully!", budget });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function getBudgets(req, res) {
  try {
    const { user_id } = req.query;
    const budgets = await budgetModel.find({ user_id });
    res.status(200).json(budgets);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function updateBudget(req, res) {
  try {
    const { _id } = req.params;
    const updateData = req.body;

    const updatedBudget = await budgetModel.findByIdAndUpdate(_id, updateData, { new: true });
    res.status(200).json({ message: "Budget updated successfully!", updatedBudget });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

async function deleteBudget(req, res) {
  try {
    const { _id } = req.params;
    await budgetModel.findByIdAndDelete(_id);
    res.status(200).json({ message: "Budget deleted successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}

module.exports = {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget
};
