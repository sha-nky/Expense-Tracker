const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  transaction_to: { type: String, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    enum: ["food", "transport", "education", "personal", "others"],
    required: true,
  },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

const transactionModel = mongoose.model("transactions", transactionSchema);

module.exports = transactionModel;
