let mongoose = require("mongoose")

let BlackSchema = new mongoose.Schema({
	userID: { type: String },
	reason: { type: String },
	addedBy: { type: String },
	userAdded: { type: Date, default: Date.now() }
})

let Blacklist = module.exports = mongoose.model("Blacklist", BlackSchema)