module.exports = {
	name: "work",
	aliases: ["trabajar"],
	category: "economia",
	owners: false,
	desc: "Trabaja para obtener mas dinero y ",
	usage: "<prefix>work",
	execute: async(client, message, args) =>{
        let guildEC = await client.economy.guilds.findOne({guildID: message.guild.id})
        let userEC = await client.economy.users.findOne({guildID: message.guild.id, userID: message.author.id})
	let Discord = require("discord.js")
        if(guildEC == null) {
        await client.economy.users.create({
        guildID: message.guild.id
        })
        }
	let random = Math.floor(Math.random() * guildEC.limitmoney)
        await client.economy.users.deleteMany({guildID: message.guild.id, userID: message.author.id}, {money: 0})
        let cosawea = new client.economy.users({
        guildID: message.guild.id,
        userID: message.author.id,
        'money': `${random}`,
        bank: 0
        })
        cosawea.save()
        message.channel.send(guildEC.works.works[Math.floor(Math.random() * guildEC.works.works.length)]+random);	
	}
	}
