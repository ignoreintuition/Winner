var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log("connection successful");
});

mongoose.connect('mongodb://localhost/win');


var winSchema = new mongoose.Schema({
  id: Number
, title: String
, image: String
, heading: String
, description: String
});


var Achievements = mongoose.model('achievements', winSchema);

Achievements.findOne({ id: 2 }, function(err, thisWin) {
  if (err) return console.error(err);
  console.dir(thisWin);
});
