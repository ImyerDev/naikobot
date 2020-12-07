let Discord = require("discord.js")
module.exports = {
 name: "discrim",
 aliases: [],
 category: "informacion",
 owners: false,
 desc: "Obten la cantidad de usuarios que tienen tal discriminador (osea #) o tu discriminador",
 usage: "<prefix>discrim || <prefix>discrim <discriminator>",
 execute: async(client, message, args) =>{
 let tag = args[0]
 if(!tag) tag = message.author.discriminator
 if(isNaN(tag)) tag = message.author.discriminator
 let discriminators = client.users.cache.filter(q => q.discriminator == tag)
 if(discriminators.size < 1) return message.channel.send(`${require("../utils/emojis/deny.js")} | No encontre a nadie con el discriminador #${tag}`)
 let i = 0
 let list = []
 for(let users of discriminators.map(q => q.tag)) {
 i++
 list.push(`${i}# ${users}`)
 }
 let txt = ""+list.join("\n")
 let embed = new Discord.MessageEmbed()
 .setColor(client.color)
 .addField(`:blue_book: | Encontre a ${discriminators.size} usuarios con el discriminador ${tag}`, "```"+txt.slice(0, 985)+"```")
 message.channel.send(embed)
 }
}