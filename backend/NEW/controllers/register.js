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

const pg = require('pg')
const pool = new pg.Pool({
    user: 'gwkbzslh',
    host: 'arjuna.db.elephantsql.com',
    database: 'gwkbzslh',
    password: 'OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN',
    port: 5432
})

router.post('/', (req, res) => {
    let insert = {
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
        values: [req.body.username, req.body.usersurname, req.body.password,
        req.body.Usename, req.body.idcard, req.body.phoneNum,
        req.body.email, req.body.address]
    }

    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('connexion error', err);
        }
        client.query(insert, function (err, result) {
            // call `done()` to release the client back to the pool
            done();

            if (err) {
                return console.error('error running query', err);
            }
            console.log(result.rows)
        });
    });
    res.status(201).json(req.body)
})

// examples
router.post('/register', (req, res) => {
    console.log(req)
    console.log(req.body)
    console.log(req.body.email)
    res.status(201).json(req.body)
})


// Export
module.exports = router