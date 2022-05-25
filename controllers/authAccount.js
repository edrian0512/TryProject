const async = require('hbs/lib/async');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE
});


exports.register = (req, res) => {
    const { name, email, phone, address, adult, child, checkIn, checkOut, message } = req.body

    db.query(
        'INSERT INTO boracay_tour SET ?', //
        {
            name: name,
            email: email,
            phone: phone,
            address: address,
            adult: adult,
            child: child,
            checkIn: checkIn,
            checkOut: checkOut,
            message: message
            

        },
        (err) => {
            if (err) {
                return console.log(err.message)
            }
            return res.render('itinerary', { message: 'You have registered successfully' })
        }
    )
}
