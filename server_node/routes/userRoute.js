const express = require("express");
const { 
    handleLogin, 
    handleSignUp 
} = require("../controllers/userController");

// Router object
const router = express.Router();

// Routers
// POST || LOGIN
router.post("/login", handleLogin);

// POST || Register User
router.post("/signup", handleSignUp);

module.exports = router;
