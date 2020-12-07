let mongoose = require("mongoose")
let LangSchema = new mongoose.Schema({
 guildID: { type: String },
 lang: { type: String }
})
let Lang = module.exports = mongoose.model("Lang", LangSchema)