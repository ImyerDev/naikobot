let mongoose = require("mongoose")
let LogSchema = new mongoose.Schema({
guildID: { type: String },
channelID: { type: String }
})

let Logs = module.exports = mongoose.model("Logs", LogSchema)