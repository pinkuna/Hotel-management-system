// data base [D2]

// class Report {
//     roomNum: number;
//     name: string;
//     phonNum: number;
//     theProblems: string;
//     Requre: string;
//     title : string;
// }

const { request } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')

const pg = require("pg");
const pool = new pg.Pool({
    user: "gwkbzslh",
    host: "arjuna.db.elephantsql.com",
    database: "gwkbzslh",
    password: "OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN",
    port: 5432,
});

// path = localhost:8004/api/register
router.post('/', (req, res) => {

    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('connection error', err);
        }
        client.query(`SELECT * FROM Register WHERE username = '${req.body.username}';`, (err, result) => {
            if (err) {
                return console.error("error running query", err);
            }
            if (result.rows[0] === undefined) {
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
                client.query(queryMessage, (err, result) => {
                    if (err) {
                        return console.error('error running query', err);
                    }
                })
                res.status(200).json({ status: 'success', data: 'Register success' })
                res.end()
            } else {
                res.status(200).json({ status: 'failed', data: 'Username already exists' })
                res.end()
            }
        })
        return done()   // call `done()` to release the client back to the pool
    })
})


router.get("/admin", (request, response) => {
    pool.connect((err, client, done) => {
        const books = `SELECT * from report;`;
        if (err) {
            return console.error("connection error", err);
        }
        client.query(books, function (err, result) {
            if (err) {
                return console.error("error running query", err);
            }
            response.status(200).json(result.rows);
            response.end();
        });
        return done()   // call `done()` to release the client back to the pool
    });
});


router.post("/admin/delete", (request, response) => {
    const paramid = request.query.id;
    pool.connect((err, client, done) => {
        const books = `DELETE FROM report WHERE id = '${request.query.id}'`;
        if (err) {
            return console.error("connection error", err);
        }
        client.query(books, function (err, result) {
            if (err) {
                return console.error("error running query", err);
            }
            response.status(200).json({ status: 'success', data: `delete table id ${paramid}` });
            response.end();
        });
        return done()   // call `done()` to release the client back to the pool
    });
});

router.get("/admin/user", (request, response) => {
    pool.connect((err, client, done) => {
        const books = `SELECT * from register`;
        if (err) {
            return console.error("connection error", err);
        }
        client.query(books, function (err, result) {
            done();
            if (err) {
                return console.error("error running query", err);
            }
            response.status(200).json(result.rows);
            response.end();
        });
    });
});

module.exports = router;