var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SkillSchema = new Schema({
	title: {type: String, unique: true},
	users: [Schema.Types.ObjectId]
});
var Skill = mongoose.model("Skill", SkillSchema);