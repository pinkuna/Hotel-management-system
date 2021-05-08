const express = require('express')
const session = require('express-session');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8004


// const bodyParser = require('body-parser')
const path = require('path')

// middle ware
app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:4200"
        ], credentials: true
    }
)) //all 
app.use(express.urlencoded({ extended: true }))
// app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //     maxAge: 30 * 60 * 1000
    // },
    // secret: 'keyboard cat',
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true, maxAge: 60000 }
}));


// Import Controllers
const bookingcon = require('./controllers/booking')
const checkoutcon = require('./controllers/checkout')
const logincon = require('./controllers/login')
const registercon = require('./controllers/register')
const reportcon = require('./controllers/report')

// Controllers
app.use('/api/booking', bookingcon)
app.use('/api/checkout', checkoutcon)
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