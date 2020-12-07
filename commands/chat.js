let chatFunc = new (require("../utils/chat.js"))().chat
let saberchat = new (require("megadb")).crearDB("saberchat")
let saberban = new (require("megadb")).crearDB("saberban")
let saberadmin = new (require("megadb")).crearDB("saberadmin")
module.exports = {
 name: "chat",
 aliases: [],
 category: "diversion",
 owners: false,
 desc: "Obten el chat del servidor",
 usage: "<prefix>chat || <prefix>chat <send || ban>",
 execute: async(client, message, args) =>{
if(!saberchat.tiene(message.guild.id)) saberchat.establecer(message.guild.id, [])
if(!saberban.tiene(message.guild.id)) saberban.establecer(message.guild.id, [])
if(!saberadmin.tiene(message.guild.id)) saberadmin.establecer(message.guild.id, [])
 let i = chatFunc.es
 if(!args.length) {
 if(saberchat.tiene(message.guild.id)) {
 let chat = await (saberchat.obtener(message.guild.id))
 if(chat == []) saberchat.push(message.guild.id, i.NOMESSAGES)

 message.channel.send(chat ? await chat.sort() : i.NOMESSAGES, {code: "md", char: "\n"})
 }
 }
 if(args[0] == "send") {
 let x = await (saberban.obtener(message.guild.id))
 if(x.includes(message.author.id)) return message.channel.send(i.BANNED(require("../utils/emojis/deny.js")))
 if(!args.slice(1).join(" ")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un texto a enviar`)
 if(args.slice(1).join(" ").length > 70) return message.channel.send(i.LENGTH(require("../utils/emojis/deny.js")))
 if(args.slice(1).join(" ").includes("`")) {
 saberchat.push(message.guild.id, i.ANTIBUG(message.guild.name, message.author.username, "con la razon: Intentar buguear "))
 args.slice(1).join(" ").replace("`", "")
 return;
 }
 if(saberchat.tiene(message.guild.id)) {
 saberchat.push(message.guild.id, i.MESSAGE(message.guild.name, args.slice(1).join(" "), message.author.username))
 return message.channel.send(i.CORRECT(require("../utils/emojis/approve.js")))
 } else {
 saberchat.push(message.guild.id, i.MESSAGE(message.guild.name, args.slice(1).join(" "), message.author.username))
 }
 return message.channel.send(i.CORRECT(require("../utils/emojis/approve.js")))
 }
 if(args[0] == "ban") {
 let array2 = await (saberadmin.obtener(message.guild.id))
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **MANAGE_GUILD** para poder hacer esta accion`)
 let user = await (message.mentions.users.first())
 if(!user) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a un jugador a banear`)
 if(!saberban.tiene(message.guild.id)) saberban.establecer(message.guild.id, [])
 let array = await (saberban.obtener(message.guild.id))
 if(array.includes(user.id)) {
 return message.channel.send(i.BANNED2(require("../utils/emojis/deny.js"), user.username))
 } else {
 if(!saberban.tiene(message.guild.id)) saberban.establecer(message.guild.id, [])
 saberban.push(message.guild.id, user.id)
 saberchat.push(message.guild.id, i.BANNED(message.guild.name, user.username))
 }
 message.channel.send(i.BAN_CORRECT(require("../utils/emojis/approve.js"), user.username))
 }
}
}