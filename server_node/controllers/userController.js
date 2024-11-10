const userModel = require("../models/userModel");

async function handleLogin(req, res) {
  try {
    const body = req.body
    if(
      !body || 
      !body.number || 
      !body.password
    ){
        return res.status(400).json({msg: "All fields are required"});
    }

    const user = await userModel.findOne({ number:body.number });
    if(user){
      const passwordCheck = (user.password === body.password);

      if(passwordCheck){
        return res.status(201).json({
          message: "Login Successfull!",
        });
      }
    } else {
      return res.status(400).json({ message: "Wrong Password" });
    }
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

    const existingUser = await userModel.findOne({ number: body.number });
    
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    } else {
      const newUser = await userModel.create({
        name: body.name,
        password: body.password,
        email: body.email,
        number: body.number,
      })
      
      return res.status(201).json({ message: "SignUp Successful!", newUser });
    }
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
