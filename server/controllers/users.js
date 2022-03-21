var models = require('../models');

//so controller handles routes's request?
module.exports = {
  get: function (req, res) {
    // var queryString = 'SELECT * FROM USERS';
    models.users.getAll(function(err, result) {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    });
  },
  post: function (req, res) {
    models.users.create(params, function(err, result) {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(404);  //diffirent from solution code
      } else {
        res.sendStatus(201);
      }
    });
  }
};
