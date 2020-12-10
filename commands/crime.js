module.exports = {
  name: "crime",
  aliases: ['crimen'],
  category: "economia",
  owners: false,
  desc: "Comete un crimen",
  usage: "<prefix>crime",
  execute: async (client, message, args) => {
        let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
	let Discord = require("discord.js")
        if(guildEC == null) {
        await client.economy.users.create({
        guildID: message.guild.id
        })
        }
	let random = Math.floor(Math.random() * guildEC.limitmoney)
        if(random > 144) {
        let yotra2 = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
        await client.economy.users.deleteMany({guildID: message.guild.id, userID: message.author.id}, {money: 0})
        let cosawea = new client.economy.users({
        guildID: message.guild.id,
        userID: message.author.id,
        'money': `-${random}`,
        bank: 0
        })
        cosawea.save()
        return message.channel.send(`${guildEC.works.crime}${guildEC.emojimoney} -${random}`)
        }
        await client.economy.users.deleteMany({guildID: message.guild.id, userID: message.author.id}, {money: 0})
        let cosawea = new client.economy.users({
        guildID: message.guild.id,
        userID: message.author.id,
        'money': `${random}`,
        bank: 0
        })
        cosawea.save()
        message.channel.send(guildEC.works.works[Math.floor(Math.random() * guildEC.works.crimes1.length)]+random);
  }
}
