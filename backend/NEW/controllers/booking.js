// data base [ฺBooking]

// class Booking {
//     name: string;
//     phonNum: number;
//     idcard: number;
//     email: string;
//     date : string;
// }

// const { request } = require("express");
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
        const userid = request.session.userid;
        const datauser = `SELECT * from booking WHERE loginid = '${userid}';`; //request.session.userid WHERE loginid = '${userid}'
        pool.connect((err, client, done) => {
            if (err) {
                return console.error("connection error", err);
            }
            client.query(datauser, function(err, result) {
                if (err) {
                    return console.error("error running query", err);
                }
                if (result.rows[0] != undefined) {
                    const updates = `UPDATE booking SET name ='${request.body.name}', 
          phoneNum ='${request.body.phoneNum}', idcard = '${request.body.idcard}', 
          email = '${request.body.email}', date = '${request.body.date}' 
          WHERE loginid = '${request.session.userid}';`;
                    client.query(updates, function(err, result) {
                        if (err) {
                            return console.error("error running query", err);
                        }
                    });
                    response.status(200).json({ status: 'success', data: 'update' })
                    response.end();
                    return done();
                } else {
                    let insert = {
                        text: `insert into booking (name, phoneNum, idcard, email, date, loginid) values ($1, $2, $3, $4, $5, $6);`,
                        values: [
                            request.body.name,
                            request.body.phoneNum,
                            request.body.idcard,
                            request.body.email,
                            request.body.date,
                            request.session.userid,
                        ],
                    };
                    client.query(insert, function(err, result) {
                        if (err) {
                            return console.error("error running query", err);
                        }
                    });
                    response.status(200).json({ status: 'success', data: 'insert' });
                    response.end();
                    return done();
                }
            });
        });
    } else {
        response.status(400).json({ status: 'failed', data: 'please login' });
        //response.redirect('/api/login/');
        response.end();
    }

});

// Export
module.exports = router;