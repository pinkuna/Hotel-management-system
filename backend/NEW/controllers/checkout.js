// data base [D3]

// class checkout {
//     roomNum: number;
//     name: string;
//     phonNum: number;
//     date: any;
// }

const express = require("express");
const router = express.Router();

const pg = require("pg");
const pool = new pg.Pool({
  user: "gwkbzslh",
  host: "arjuna.db.elephantsql.com",
  database: "gwkbzslh",
  password: "OQMGhyGqQmymJUzq_EFOeQcLBAFfQqSN",
  port: 5432,
});


router.post("/", (request, response) => {
  if (request.session.loggedin) {
    let reposts = {
      text: `insert into checkout(roomnum, name, phonenum, date) values ($1, $2, $3, $4);`,
      values: [
        request.body.roomNum,
        request.body.name,
        request.body.phonNum,
        request.body.date,
      ],
    };
    pool.connect((err, client, done) => {
      if (err) {
        return console.error("connexion error", err);
      }
      client.query(reposts, function (err, result) {
        if (err) {
          return console.error("error running query", err);
        }
        response.status(200).json({status: 'success', data: 'insert success'})
        response.end()
        return done();
      });
    });
    //response.status(201);
  } else {
    response.status(200).json({status:'failed', data:'please login'});
    //response.redirect('/api/login/');
    response.end();
  }
});
module.exports = router;