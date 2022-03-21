var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

//copy from spec file... can I still use the same variable name
const dbConnection = mysql.createConnection({ //why don't we need host:
  user: 'root', //
  password: '',
  database: 'chat',
});

dbConnection.connect(); //connect to sql database server?
//can take in a callback to handle error.

module.exports = dbConnection;

//do we need to close connection? *** and where?