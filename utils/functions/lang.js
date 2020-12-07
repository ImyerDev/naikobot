let model = require("../../utils/models/lang.js")
class LangManager{
hasLang(guildid) {
let x = await model.findOne({guildID: guildid})
if(x == null) return false
if(x) return true
}
getLang(guildid, argument = null) {
let x = await model.findOne({guildID: guildid})
if(!argument == null) {
if(x == null) {
let v = await model.create({
guildID: guildid,
lang: argument
})
}
}
if(argument == null) {
return x.lang
}
}
setLang(guildid, lang) {
let x = await model.findOne({guildID: guildid})
if(x) {
let v = await model.findOneAndDelete({guildID: guildid})
await model.create({
guildID: guildid,
"lang": lang
})
return lang
}
if(x == null) {
await model.create({
guildID: guildid,
"lang": lang
})
return lang
}
}
}
module.exports = LangManager