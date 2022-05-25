// import 
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv')
const port = 3000;
const hostName = 'localhost';
const path = require('path')
// const userRoutes = require('./routes/User');

// Creating instance
const app = express();

// Database Connection import from env
dotenv.config({ path: './.env' })
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname,'/public')));
app.use('/public',express.static(path.join(__dirname,'/public')));

app.set('view engine', 'hbs');

app.use('/', require('./routes/registerRoutes'));

app.use('/Auth', require('./routes/Auth')); //try capital

app.listen(port, hostName, () => {
    console.log('Server Started')
    db.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('DB Connected')
        }
    })
});
