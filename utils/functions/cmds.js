let model = require("../../utils/models/commands.js")
let { checkUse } = require("../../utils/check.js")
class CallbackError extends Error{
 constructor(error) {
  super();
   this.name = "[CALLBACK_ERROR]"
   this.message = error
 }
}
class Commands{
 use(toUse, guildid, command, commands) {
 let use = toUse
 if(use == "has") {
 checkUse("has", guildid)
 }
 if(use == "delete") {
 checkUse("delete", guildid, command, commands)
 }
 if(use == "add") {
 checkUse("add", guildid, command, commands)
 }
 if(use == "list") {
 checkUse("list", guildid)
 }
 }
}

module.exports = Commands