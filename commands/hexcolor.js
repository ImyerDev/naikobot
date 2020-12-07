module.exports = {
 name: "hexcolor",
 aliases: [],
 category: "utilidad",
 owners: false,
 desc: "Obten una vista previa de un color hexadecimal",
 usage: "<prefix>help || <prefix>help <command_name>",
 execute: async(client, message, args) =>{
let api = "https://api.alexflipnote.dev/color/image"
let color = args[0]
if(!color) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el color en hexadecimal (no debe incluir #)")
let Discord = require("discord.js")
let embed = new Discord.MessageEmbed()
.setDescription("<a:approve:734933612906020974> | "+color)
.setImage(api+"/"+color)
.setColor(color)
message.channel.send(embed)
}
}