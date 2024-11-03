const userModel = require("../models/userModel");

async function handleLogin(req, res) {
  try {
    const { number, password } = req.body;
    const user = await userModel.findOne({ number, password });

    if (!user) {
      return res.status(404).send("User Not Found!");
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

async function handleSignUp(req, res) {
  try {
    const newUser = new userModel(req.body)
    await newUser.save()
    res.status(201).json({
      success: true,
      newUser
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
}

module.exports = {
  handleLogin,
  handleSignUp,
};
