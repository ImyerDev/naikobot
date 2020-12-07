let mongoose = require("mongoose")

let PostSchema = new mongoose.Schema({
	userID: { type: String },
	userAvatar: { type: String }
        post: { type: String }
})

let Post = module.exports = mongoose.model("Notelist", NoteSchema)