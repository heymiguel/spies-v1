var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    // required: true
  },
  characters:{
    type: [CharacterSchema],
    default:[]
  }
  //get one to show first then you can adapt to make many?

});

var CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  callsign: {
    type: String,
    required: true
  },
  playedBy: {
    type: [PlayerSchema],
    default: []
  },
  description: {
   type:  [DescriptionSchema],
   default: []
  }
  // BaseStats: BaseStatsSchema
});


var DescriptionSchema = new mongoose.Schema({
	Age: Number,
	Height: Number,
	Weight: Number,
	Ethnicity: String,
	Class: String,
	Rank: String,
	Faction: {
    type: String,
    enum: ['Lensmen', 'b', 'c', 'd', 'e']
  },
});

var BaseStatsSchema = new mongoose.Schema({
  combat: {
    type: Number,
    required: true
  },
  charisma: {
    type: Number,
    required: true
  },
  kinetics: {
    type: Number,
    required: true
  },
  logistics: {
    type: Number,
    required: true
  },
  intellect: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Player', PlayerSchema);
module.exports = mongoose.model('Description', DescriptionSchema);
// module.exports = mongoose.model('BaseStats', BaseStatsSchema);
module.exports = mongoose.model('Character', CharacterSchema);
