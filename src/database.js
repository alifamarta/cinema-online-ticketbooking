const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cineseats-db'
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({extended: true}));

// Post signup
app.post('/submit_form', (req, res) => {
    const email = req.body.email;
    const username = req.body.name;
    const password = req.body.password;
    const query = 'INSERT INTO User (email, username, password) VALUES (?, ?)';
    
    db.query(query, [email, username, password], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Signup is accepted');
        }
    });
});

// Post login
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    db.query(query, [username, password], (err, res) => {
        if (err) {
            res.send(err);
        } else {
            if (res.length > 0) {
                res.send('Login successful')
            } else {
                res.send('Invalid username or password')
            }
        }
    })
})

app.listen(3000, () => console.log('server started on port 3000'));