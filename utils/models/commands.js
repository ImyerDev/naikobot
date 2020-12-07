let mongoose = require("mongoose")
let CommandSchema = new mongoose.Schema({
guildID: { type: String },
commandsDisable: { type: Array },
commandsEnable: { type: Array }
})
let Commands = module.exports = mongoose.model("Commands", CommandSchema)