var models = require('../models');
//then use models method...

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, result) {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(404); //why 500 in solution?
      } else {
        res.json(result);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(params, function(err, result) {
      if (err) {
        console.log('ERROR: ', err);
        res.sendStatus(404); //still why 500 in soluiton. can use 400?
      } else {
        // res.json(result); //samething as JSON.stringify ? no need to send back message
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
