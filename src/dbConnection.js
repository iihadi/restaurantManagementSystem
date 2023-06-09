const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b5af0859c0faaa',
    password: '0127196f',
    database: 'heroku_f930aca5c566b3d'
});



// Initialize the app
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connection.connect();

app.get('/products', function (req, res) {
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    })
})

app.post('/active_orders', function (req, res) {
    const active_order = { order: JSON.stringify(req.body) }
    console.log('sending order...')
    connection.query('INSERT INTO active_orders set ?', active_order, function (error, results, fields) {
        if (error) throw error
        res.status(201).end()
        console.log('order sent')
       
    })
})

// Start the server
app.listen(8000, () => {
    console.log('Go to http://localhost:8000/products to see products');
});