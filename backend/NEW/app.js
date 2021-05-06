const express = require('express')
var session = require('express-session');
const app = express()
const PORT = process.env.PORT || 8004

// const bodyParser = require('body-parser')
const path = require('path')

const pg = require('pg')
const pool = new pg.Pool({
    user: 'gwkbzslh',
    host: 'arjuna.db.elephantsql.com',
    database: 'gwkbzslh',
    password: 'OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN',
    port: 5432
})

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Import Controllers
const bookingcon = require('./controllers/booking')
const checkoutcon = require('./controllers/checkout')
const logincon = require('./controllers/login')
const registercon = require('./controllers/register')
const reportcon = require('./controllers/report')

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: {
    //     maxAge: 30 * 60 * 1000
    // },
}));

// Controllers
app.use('/api/booking', bookingcon)
// app.use('/api/checkout', checkoutcon)
app.use('/api/report', reportcon)
app.use('/api/login', logincon)
app.use('/api/register', registercon)

// test API GET
app.get('/', (req, res) => {
    res.send(`Hello World from PORT ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl+C to quit `);
})