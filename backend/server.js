var mysql = require('mysql');
const express = require('express') 
const cors = require('cors')
const app = express()  
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// middle ware  ต้องเรียงลำดับ
app.use(cors())  //all 
app.use(express.json()) 
app.use(express.urlencoded({extended : false})) 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "accounts"
  });

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response){
    response.send(request.body.username)
});

app.post('/login', function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    if(username && password){
        con.query('SELECT * FROM accounts WHERE username = ? AND password = ? ', [username, password], function(error, result, fields){
            if (result.length > 0){
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else{
                request.session.loggedin = false;
                response.send('inconnect username and password')
            }
            response.end();
        });
    } else{
        request.session.loggedin = false;
        response.send('plears enter Username and password');
        response.end();
    }
})

app.get('/home',function(request, response){
    if (request.session.loggedin){
        response.send('wellcomback  ' + request.session.username+'!');
    } else {
        response.send('please login')
    }
    response.end(); 
});

app.use(require('./controller-apiwat'))


const PORT = process.env.PORT||1150
app.listen(PORT, () => {
    const env = `${process.env.NODE_ENV||'development'}` 
    console.log(`App listening on port ${PORT}`);
    console.log(`App listening on port ${env}`);
    console.log(`Press Ctrl+C to quit `); 

}) 