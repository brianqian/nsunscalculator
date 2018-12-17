const express = require('express');
const mysql = require('mysql');
const moment = require('moment');
const bodyParser = require('body-parser');
let PORT = 3000;

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'nsuns_db',
});

connection.connect(err => {
  if (err) throw err;
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/load', (req, res) => {
  // connection.query('SELECT * FROM nsuns WHERE id');
  res.send('hello');
});

app.post('/api/save', (req, res) => {});

app.listen((PORT, err) => {
  if (err) throw err;
  console.log('Now Listening on port ' + PORT);
});
