module.exports = {
	name: "invite",
	aliases: [],
	category: "utilidad",
	owners: false,
	desc: "Invita a Naiko",
	usage: "<prefix>invite",
	execute: async(client, message, args) =>{
	client.generateInvite().then(invite =>{
	let Discord = require("discord.js")
	let embed = new Discord.MessageEmbed()
	.setDescription("[Invitacion]("+invite+")")
	.setAuthor(message.author.tag, message.author.avatarURL())
	.setColor(client.color)
	message.channel.send(embed)
	})
	}
	}