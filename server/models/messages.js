var db = require('../db');

module.exports = {
  getAll: function (callback) {
    //why left outer join.
    //get id, message, roomname, username
    //left outer join???
    var queryString = 'SELECT Messages.id, Messages.roomname, Messages.message Users.username\
    FROM Messages LEFT OUTER JOIN Users on (messages.userid = users.id) \
    order by messages.id desc';
    db.query(queryString, function(err, result) {
      callback(result);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryString = 'INSERT INTO Messages(message, id_Users, roomname) \
    VALUEs(?, (SELECT id from Users WHERE username = ? limit 1), ?)';
    db.query(queryString, params, function(err, result) {
      callback(result);
    });
  } // a function which can be used to insert a message into the database
};
