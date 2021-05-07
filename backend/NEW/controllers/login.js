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

// router.post("/", function(request, response) {
//     var username = request.body.username;
//     var password = request.body.password;
//     if (username && password) {
//         pool.connect(function(err, client, done) {
//             const queryMessage = `SELECT * FROM register WHERE username = '${username}' AND password = '${password}'`;
//             if (err) {
//                 return console.error("connection error", err);
//             }
//             client.query(queryMessage, function(err, result) {
//                 const data = result.rows;
//                 client.end();
//                 if (data.length > 0) {
//                     request.session.loggedin = true;
//                     request.session.username = username;
//                     request.session.userid = data[0].id;
//                     response.status(200).json({ status: 'success', data: 'login completed' });
//                     //response.status(200).redirect('/home');
//                 } else {
//                     request.session.loggedin = false;
//                     response.status(200).json({ status: 'failed', data: 'username or password invalid' });
//                     //response.status(200).redirect('/login');
//                 }
//                 response.end();
//             });
//         });
//     } else {
//         request.session.loggedin = false;
//         response.status(200).json({ status: 'failed', data: 'please enter Username and password' });
//         response.end();
//     }
// });


router.post("/", (request, response) => {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        pool.connect((err, client, done) => {
            const queryMessage = `SELECT id,username,password FROM register WHERE username = '${username}'`;
            if (err) {
                return console.error("connection error", err);
            }
            client.query(queryMessage, (err, result) => {
                let data = result.rows
                client.end()
                // let condition = false
                if (data.length == 0) {
                    response.status(200).json({ status: 'failed', data: 'Please Register or Invalid username' })
                } else {
                    const condition = bcrypt.compareSync(password, data[0].password)
                    if (condition) {
                        request.session.loggedin = true;
                        request.session.username = username;
                        request.session.userid = data[0].id;
                        response.status(200).json({ status: 'success', data: 'login completed' });
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