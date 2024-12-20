const mongoose = require("mongoose");

// Schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required and should be unique"],
      unique: true,
    },
    number: {
      type: Number,
      required: [true, "Phone number is required and should be unique"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// Export
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
