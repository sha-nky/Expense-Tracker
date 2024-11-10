const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const userRoute = require('./routes/userRoute')
const connectDb = require("./config/connectDb");

// Config .env file
dotenv.config();

// Database call
connectDb();

// Rest object
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/users', require('./routes/userRoute'))

// Port
const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
