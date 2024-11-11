const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

const userRoute = require('./routes/userRoute')
const transactionRoute = require("./routes/transactionRoute");
const budgetRoute = require("./routes/budgetRoute");
const expenseRoute = require("./routes/expenseRoute");

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
app.use('/api/v1/users', userRoute)
app.use("/api/v1/transactions", transactionRoute);
app.use("/api/v1/budgets", budgetRoute);
app.use("/api/v1/expenses", expenseRoute);

// Port
const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
