// console.log("Log in");


// data base [D1]
// class login {
//     username: string;
//     password: string;
// }

const express = require('express')
const router = express.Router()
require('dotenv').config();


const url = require('url')
res.send(`Hello World from PORT`)
const DB = process.env['DB']

// console.log(DB)
router.get('/', (req, res) => {
    console.log(DB)
})
// const params = url.parse(DB);
// const auth = params.auth.split(':');
// const config = {
//     user: auth[0],
//     password: auth[1],
//     host: params.hostname,
//     port: params.port,
//     database: params.pathname.split('/')[1],
//     ssl: true
//   };
// const pg = require('pg-pool')
// const pool = new pg(config);
// const pool = new pg.Pool({
//     user: 'gwkbzslh',
//     host: 'arjuna.db.elephantsql.com',
//     database: 'gwkbzslh',
//     password: 'OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN',
//     port: 5432
// })

// router.post('/', (req, res) => {
//     let insert = {
//         text: `insert into Register(   
//             username,
//             usersurname,
//             password,
//             Usename,
//             idcard,
//             phoneNum,
//             email,
//             address
//         ) values ($1, $2, $3, $4, $5, $6, $7, $8);`,
//         values: [req.body.username, req.body.usersurname, req.body.password,
//         req.body.Usename, req.body.idcard, req.body.phoneNum,
//         req.body.email, req.body.address]
//     }

//     pool
//         .connect()
//         .then(client => {
//             return client
//                 .query(insert)
//                 .then(res => {
//                     client.release()
//                     console.log(res.rows)
//                 })
//                 .catch(err => {
//                     client.release()
//                     console.log(err.stack)
//                 })
//         })
//     res.status(201).json(req.body)
// })

// Export module
module.exports = router