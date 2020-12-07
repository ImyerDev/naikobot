let model = require("../utils/models/commands.js")
class UseError extends Error{
 constructor(error) {
  super();
   this.name = "[USE_ERROR]"
   this.message = error
 }
}
let uses = {
"has": async(guildid) =>{
let x = await model.findOne({guildID: guildid})
if(x == null) {
return false
}
if(x) {
return true
}
},
"delete": async(guildid, command, commands = []) =>{
let x = await model.findOne({guildID: guildid})
if(x == null) {
x = new model({
guildID: guildid,
commandsDisable: [],
commandsEnable: []
})
}
if(x) {
if(!command) command = null
if(command == null) {
for(let commnds of commands) {
x.commandsDisable.push(commnds)
}
return x.commandsDisable
}else{
x.commandsDisable.push(command)
}
}
},
"add": async(guildid, command, commands = []) =>{
let x = await model.findOne({guildID: guildid})
if(x == null) {
x = new model({
guildID: guildid,
commandsDisable: [],
commandsEnable: []
})
}
if(x) {
if(!command) command = null
if(command == null) {
for(let commnds of commands) {
x.commandsEnable.push(commnds)
}
return x.commandsEnable
}else{
x.commandsEnable.push(command)
return x.commandsEnable
}
}
},
"list": async(enableOrDisable, guildid) =>{
let eod = enableOrDisable
if(eod == null) return;
let x = await model.findOne({guildID: guildid})
if(x == null) {
x = new model({
guildID: guildid,
commandsDisable: [],
commandsEnable: []
})
}
let eodReturn
if(x) {
if(eod == "enable") {
eodReturn = x.commandsEnable
}
if(eod == "disable") {
eodReturn = x.commandsDisable
}
return eodReturn
}
}
}
let usesSecond = {
has: async(userid, guildid) =>{
let x = await levels.findOne({userID: userid, guildID: guildid})
if(!userid) x = await levels.findOne({guildID: guildid})
if(x == null) {
return false
}
if(x) {
return true
}
},
add: async(level, xp, userid, guildid) =>{
let x = await levels.findOne({userID: userid, guildID: guildid})
if(x == null) throw new UseError("There is no such user in the LV")
if(x) {
let randomxp = Math.floor(Math.random() * 30) + 1
let levelup = 5 * (x.nivel ** 2) + 50 * x.nivel + 100
x.xp += randomxp
if((x.xp + randomxp) >= levelup) return
let x2 = await levels.findOne({userID: userid, guildID: guildid}, {xp: x.xp, levelup})
}
},
"set": async(userid, guildid) =>{

},
"get": async(userid, guildid) =>{

}
}
module.exports = {
 checkUse: async(use) =>{
 if(!use) throw new UseError("You must put a use existent")
 if(uses[use] == undefined) throw new UseError("The use "+use+" does not exist")
 let Uses = uses[use]
 return Uses
 },
 checkUseSecond: async(use) =>{
 if(!use) throw new UseError("You must put a use existent")
 if(usesSecond[use] == undefined) throw new UseError(" the use "+use+" does not exist")
 let Uses = usesSecond[use]
 return Uses
 }
}