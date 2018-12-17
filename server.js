const express = require('express');
const mysql = require('mysql');
const moment = require('moment');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

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

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log('get request');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api', (req, res) => {
  console.log(req.query.user);
  connection.query(`SELECT * FROM workouts WHERE id = ${req.query.user}`, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.get('/api/create', (req, res) => {
  connection.query(
    'INSERT INTO workouts (squatRM, benchRM, deadliftRM, ohpRM) VALUES (100, 100 ,100, 100)',
    (err, data) => {
      if (err) throw err;
      res.json(data.insertId);
    }
  );
});

app.post('/api/save', (req, res) => {
  console.log(req.query.user);
  console.log(req.body);
  const data = req.body;
  connection.query(`UPDATE workouts 
  SET squatRM = ${data.squatRM},
  benchRM = ${data.benchRM},
  ohpRM = ${data.ohpRM},
  deadliftRM = ${data.deadliftRM}
  WHERE id = ${req.query.user}`);
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log('Now Listening on port ' + PORT);
});
