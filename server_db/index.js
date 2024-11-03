const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')

// Config .env file
dotenv.config()

// Rest object
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
    return res.send("<h1>Hello From Server")
})

// Port
const PORT = 8000 || process.env.PORT

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))