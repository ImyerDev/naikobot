module.exports = {
	name: "setanecdote",
	aliases: [],
	category: "logging",
	owners: false,
	desc: "Agrega un canal de anecdotas a mi sistema de datos",
	usage: "<prefix>setanecdote <channel>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        const channel = message.mentions.channels.first() || message.guild.channels.find(q => q.name == args[0])
        if(!channel) return message.channel.send(`${require("../utils/emojis/*deny.js")} | Debes de mencionar un canal o escribir su nombre`)
        let x = await client.anecdote.findOne({guildID: message.guild.id, channelID: channel.id})
        if(x == null) {
        await client.an.create({guildID: message.guild.id, channelID: channel.id})
        return message.channel.send(`${require("../utils/emojis/deny.js")} | El canal ${channel.name} esta en mi sistema de datos`)
        message.channel.send(`${require("../utils/emojis/deny.js")} | El canal ${channel.name} ya estaba anteriormente en mi sistema de datos`)
        }
	}
	}