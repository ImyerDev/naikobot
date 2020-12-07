module.exports = {
 name: "edits",
 aliases: [],
 category: "informacion",
 owners: false,
 desc: "Obten los editos de un mensaje",
 usage: "<prefix>edits <channel || idmessage>",        
 execute: async(client, message, args) =>{
 let channel = message.mentions.channels.first() || message.channel
 let idMessage = args[0]
 /*if(!channel) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar un canal`)*/
 let isMessage = await channel.messages.cache.has(idMessage)
 if(!idMessage) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner la id de un mensaje existente`)
 if(!isMessage) return message.channel.send(`${require("../utils/emojis/deny.js")} | Esa id no existe`)
 let mensaje = await message.channel.messages.cache.get(idMessage)._edits
 if(!mensaje) return message.channel.send(`${require("../utils/emojis/deny.js")} | Ese mensaje no tiene editos`)
 let Discord = require("discord.js")
 let embed = new Discord.MessageEmbed()
 .setColor(client.color)
 .setDescription("Mensajes editados de el usuario "+message.channel.messages.cache.get(idMessage).author.tag+"")
 let i = 0;
 for(let messages of message.channel.messages.cache.get(idMessage)._edits.sort()) {
 i++
 embed.addField(`Mensaje N°${i}`, messages)
 }
 message.channel.send(embed)
 }
}