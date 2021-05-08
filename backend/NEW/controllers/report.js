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
      text: `insert into report(roomNum, name, phoneNum, theProblems, Requre, title) values ($1, $2, $3, $4, $5, $6);`,
      values: [
        request.body.roomNum,
        request.body.name,
        request.body.phoneNum,
        request.body.theProblems,
        request.body.Requre,
        request.body.title
      ],
    };
    pool.connect((err, client, done) => {
      if (err) {
        return console.error("connexion error", err);
      }
      client.query(reposts, function (err, result) {
        done();

        if (err) {
          return console.error("error running query", err);
        }
      });
    });
    response.status(201).json({status:'success', data:'report send to admin'});
    response.end();
  } else {
    response.status(200).json({status:'failed', data:'please login'});
    //response.redirect('/api/login/');
    response.end();
  }
});


router.post("/admin", (request, response) => {
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
      response.status(200).json({status : 'success', data : `delete table id ${paramid}`});
      response.end();
    });
  });
});

module.exports = router;