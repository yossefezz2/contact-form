const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact_form',
  port: '3306',
});

conn.connect((err) => {
  if (err) {
    console.log(' connecting error: ', err);
    return;
  }

  console.log('connected my server');
});

module.exports = conn;
