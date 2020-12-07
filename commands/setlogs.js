module.exports = {
	name: "setlogs",
	aliases: [],
	category: "logging",
	owners: false,
	desc: "Agrega un canal evento a mi sistema de datos",
	usage: "<prefix>setlogs <channel>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        const channel = message.mentions.channels.first() || message.guild.channels.find(q => q.name == args[0])
        if(!channel) return message.channel.send(`${require("../utils/emojis/*deny.js")} | Debes de mencionar un canal o escribir su nombre`)
        let x = await client.logs.findOne({guildID: message.guild.id, channelID: channel.id})
        if(x == null) {
        await client.logs.create({guildID: message.guild.id, channelID: channel.id})
        return message.channel.send(`${require("../utils/emojis/deny.js")} | El canal ${channel.name} esta en mi sistema de datos`)
        message.channel.send(`${require("../utils/emojis/deny.js")} | El canal ${channel.name} ya estaba anteriormente en mi sistema de datos`)
        }
	}
	}