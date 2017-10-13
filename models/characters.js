var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CharactersSchema = new Schema({
	description: "String"
});

characters = [
	{
		name: "Rick Grimes",
		gender: "Male",
		occupation: "Police Officer",
		stillAlive: true
	},
	{
		name: "Shane Walsh",
		gender: "Male",
		occupation: "Police Officer",
		stillAlive: false
	}
]

var Characters = mongoose.model('Characters', CharacterScema);

module.exports = Characters;