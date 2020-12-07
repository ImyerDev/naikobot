module.exports = {
	name: "kick",
	aliases: [],
	category: "moderacion",
	owners: false,
	desc: "Expulsa a un usuario con su razon",
	usage: "<prefix>kick <mentioned>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **MANAGE_MESSAGES** para silenciar usuarios de tu servidor`)
        const user = message.mentions.users.first()
        const reason = args.join(" ")
        if(!user) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de mencionar a el usuario que quieres silenciar de tu servidor`)
        if(user.id == message.author.id) return message.channel.send(`${require("../utils/emojis/deny.js")} | No te puedes expulsar a ti mismo`)
        if(!reason) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner una razon para expulsar a este usuario de tu servidor`)
        const embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setDescription(message.guild.name+"'s modlogs")
        .addField("Usuario:", user)
        .addField("Tipo:", "Expulsion")
        .addField("Razon:", reason.slice(22))
        .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
        message.guild.member(message.author.id).kick(reason)
}
}