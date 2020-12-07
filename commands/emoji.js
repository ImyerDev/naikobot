module.exports = {
 name: "emoji",
 aliases: [],
 category: "informacion",
 owners: false,
 desc: "Obtiene la informacion de tal emoji",
 usage: "<prefix>emoji <emojiname || emojiidentifier>",
 execute: async(client, message, args) =>{
 let moment = require("moment")
 require("moment-duration-format");
 if(!args[0]) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un texto`)
 let emoji = message.guild.emojis.cache.find(q => q.identifier == args[0].includes("<>") ? args[0].replace("<>", "") : q.name == args[0])
 if(!emoji) return message.channel.send(`${require("../utils/emojis/deny.js")} | Ese emoji no esta en el servidor`)
 let embed = new (require("discord.js")).MessageEmbed()
 .setColor(client.color)
 .setThumbnail(emoji.url)
 .setDescription("Informacion del emoji:"+emoji.name)
 .addField(":bust_in_silhouette: | ID:", emoji.id)
 .addField(":book: | Identificacion:", emoji.identifier)
 .addField()
 message.channel.send(embed)
 }
 }