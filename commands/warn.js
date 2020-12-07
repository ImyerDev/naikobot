module.exports = {
	name: "warn",
	aliases: [],
	category: "moderacion",
	owners: false,
	desc: "Advierte a un usuario con su razon",
	usage: "<prefix>warn <mentioned> <reason>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **KICK_MEMBERS** para advertir usuarios de tu servidor`)
        const user = message.mentions.members.first()
        const reason = args.join(" ")
        if(!user) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a el usuario que quieres prohibir de tu servidor`)
        if(user.id == message.author.id) return message.channel.send(`${require("../utils/emojis/deny.js")} | No te puedes advertir a ti mismo`)
        if(!reason) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una razon para advertir a el usuario de tu servidor`)
        const embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setDescription(message.guild.name+"'s modlogs")
        .addField("Usuario:", user)
        .addField("Tipo:", "Aviso")
        .addField("Razon:", reason.slice(22))
        .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
	}
	}