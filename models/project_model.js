var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
	title: String,
	description: String,
	users: [Schema.Types.ObjectId],
	owner: Schema.Types.ObjectId
});
var Project = mongoose.model("Project", ProjectSchema);