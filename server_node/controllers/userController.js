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
    const body = req.body
    if(
      !body || 
      !body.name || 
      !body.email || 
      !body.number || 
      !body.password
    ){
        return res.status(400).json({msg: "All fields are required"});
    }
    const newUser = await userModel.create({
      name: body.name,
      email: body.email,
      number: body.number,
      password: body.password
    })
    
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
