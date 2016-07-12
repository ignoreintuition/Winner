var mongoose = require('mongoose');

var Win = new mongoose.Schema({
  title: String
, image: String
, heading: String
, description: String
});

module.exports = mongoose.model('achievements', Win);