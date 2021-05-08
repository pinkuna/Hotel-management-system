// data base [D1] Register

// class register {
//     username: string;
//     Usesurname: string;
//     password: string;
//     repassword: string;
//     Usename: string;
//     idcard: number;
//     phonNum: number;
//     email: string;
//     address : string;
// }

const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const pg = require('pg')
const pool = new pg.Pool({
    user: 'gwkbzslh',
    host: 'arjuna.db.elephantsql.com',
    database: 'gwkbzslh',
    password: 'OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN',
    port: 5432
})

// path = localhost:8004/api/register
router.post('/', (req, res) => {
    let hash_password = bcrypt.hashSync(req.body.password, 10)

    let queryMessage = {
        text: `insert into Register(   
            username,
            usersurname,
            password,
            Usename,
            idcard,
            phoneNum,
            email,
            address
        ) values ($1, $2, $3, $4, $5, $6, $7, $8);`,
        values: [req.body.username, req.body.usersurname, hash_password,
        req.body.Usename, req.body.idcard, req.body.phoneNum,
        req.body.email, req.body.address
        ]
    }
    console.log(pool.totalCount)
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('connection error', err);
        }
        client.query(queryMessage, function (err, result) {
            done();  // call `done()` to release the client back to the pool
            if (err) {
                return console.error('error running query', err);
            } else {
            }
        })
    })
    res.status(201).json({ status: 'success', data: 'Register success' })
    res.end()
})

// Export module
module.exports = router