var db = require('../db');

module.exports = {
  getAll: function (callback) { //why callback
    var queryString = 'SELECT * FROM USERS';
    db.query(queryString, function(err, result) {
      callback(err, result);
    });
  },
  create: function (params, callback) {
    //? is a default method for placeholder? and 'provides the argument for the query function itself' and we need params pass in?
    var queryString = 'INSERT INTO USERS(username) VALUES (?)';
    db.query(queryString, params, function(err, result) {
      callback(err, result); //what'll the callback be
    });
  }
};


//getAll & create VS get & post?