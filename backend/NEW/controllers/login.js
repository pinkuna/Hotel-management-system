// console.log("Log in");

// data base [D1]
// class login {
//     username: string;
//     password: string;
// }

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

router.post("/", (request, response) => {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        pool.connect((err, client, done) => {
            const queryMessage = `SELECT id,username,password,admin FROM register WHERE username = '${username}'`;
            if (err) {
                return console.error("connection error", err);
            }
            client.query(queryMessage, (err, result) => {
                let data = result.rows
                done()
                if (data.length === 0) {
                    response.status(200).json({ status: 'failed', data: 'Please Register or Invalid username' })
                } else {
                    const check_password = bcrypt.compareSync(password, data[0].password)
                    if (check_password) {
                        request.session.loggedin = true;
                        request.session.admin = data[0].admin;
                        request.session.username = username;
                        request.session.userid = data[0].id;
                        console.log(request.session)
                        response.status(200).json({ status: 'success', data: 'login completed', admin: data[0].admin });
                        //response.status(200).redirect('/home');
                    } else {
                        request.session.loggedin = false;
                        response.status(200).json({ status: 'failed', data: 'password invalid' });
                        //response.status(200).redirect('/login');
                    }
                }
                response.end();
            });
        });
    } else {
        request.session.loggedin = false;
        response.status(200).json({ status: 'failed', data: 'please enter Username and password' });
        response.end();
    }
});


// Export module
module.exports = router;