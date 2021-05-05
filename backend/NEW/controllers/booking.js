// data base [ฺBooking]

// class Booking {
//     name: string;
//     phonNum: number;
//     idcard: number;
//     email: string;
//     date : string;
// }

const { request } = require("express");
const express = require("express");
const router = express.Router();

// const pg = require("pg");
// const pool = new pg.Pool({
//   user: "gwkbzslh",
//   host: "arjuna.db.elephantsql.com",
//   database: "gwkbzslh",
//   password: "OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN",
//   port: 5432,
// });

router.post("/", (request, response) => {
  if (request.session.loggedin) {
    // const datauser = `SELECT * from register WHERE id = '${request.session.userid}';`;
    // pool.connect(function (err, client, done) {
    //   if (err) {
    //     return console.error("connection error", err);
    //   }
    //   client.query(datauser, function (err, result) {
    //     response.status(200).json((result.rows)[0].username);
    //     if (err) {
    //       return console.error("error running query", err);
    //     }
    //   });
    // });
    let insert = {
      text: `insert into booking (name, phoneNum, idcard, email, date) values ($1, $2, $3, $4, $5);`,
      values: [
        request.body.name,
        request.body.phoneNum,
        request.body.idcard,
        request.body.email,
        request.body.date,
      ],
    };
    pool.connect((err, client, done) => {
      if (err) {
        return console.error("connexion error", err);
      }
      client.query(insert, function (err, result) {
        done();
        if (err) {
          return console.error("error running query", err);
        }
      });
    });
    response.status(201);
  } else {
    response.send("please login");
    //response.redirect('/api/login/');
  }
});

// examples
// router.post('/booking/in', (req, res) => {
//     console.log(req)
//     console.log(req.body)
//     console.log(req.body.email)
//     res.status(201).json(req.body)
// })

// Export
module.exports = router;
