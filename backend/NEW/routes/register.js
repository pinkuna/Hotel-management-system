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





app.post('/register', (req, res) => {
    console.log(req)
    console.log(req.body)
    console.log(req.body.email)
    res.status(201).json(req.body)
})
