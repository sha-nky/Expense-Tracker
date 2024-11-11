const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    budget_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    category: {
      type: String,
      enum: ["food", "transport", "education", "personal", "others"],
      required: true,
    },
    amount_limit: { type: Number, required: true },
    spent_amount: { type: Number, default: 0 },
    notifications: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const budgetModel = mongoose.model("budgets", budgetSchema);

module.exports = budgetModel;
