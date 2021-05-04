const express = require('express')
const app = express()
const PORT = process.env.PORT || 6543
require('dotenv/config')

// const bodyParser = require('body-parser')
const path = require('path')

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import Routes
const bookingRoute = require('./routes/booking')
const checkoutRoute = require('./routes/checkout')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const reportRoute = require('./routes/report')

// Router
app.use('/api/booking', bookingRoute)
app.use('/api/checkout', checkoutRoute)
app.use('/api/login', loginRoute)
app.use('/api/register', registerRoute)
app.use('/api/report', registerRoute)

// test API GET
app.get('/', (req, res) => {
    res.send(`Hello World from PORT ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl+C to quit `);
})