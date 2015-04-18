var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SkillSchema = new Schema({
	title: {type: String, unique: true},
	users: [Schema.Types.ObjectId]
});

SkillSchema.statics.findByName = function(name, callback) {
	return this.find({name: name}, callback);
}

var Skill = mongoose.model("Skill", SkillSchema);