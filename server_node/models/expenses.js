const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    amount: { type: Number, required: true },
    category: {
      type: String,
      enum: ["food", "transport", "education", "personal", "others"],
      required: true,
    },
    date: { type: Date, default: Date.now },
    description: { type: String },
    location: { type: String }, // Optional field to track where the expense was made
    payment_method: {
      type: String,
      enum: ["cash", "credit card", "debit card", "digital wallet"],
      default: "cash",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const expenseModel = mongoose.model("expenses", expenseSchema);

module.exports = expenseModel;
