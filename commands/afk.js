module.exports = {
	name: "afk",
	aliases: ["setafk", "establecer-ausencia", "set-afk"],
	category: "utilidad",
	owners: false,
	desc: "Establecete afk para que los otros usuarios sepan que estas ausente o sin utilizar el teclado (away from keyboard)",
	usage: "<prefix>afk <reason>",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
		let afk = new (require("megadb")).crearDB("afk")
        let razon = args.join(" ")
		if(!razon) return message.channel.send("<a:deny:718249526217015338> | Debes de poner una razon para que estes afk")
		afk.establecer(`${message.guild.id}.${message.author.id}.reason`, razon)
		afk.establecer(`${message.guild.id}.${message.author.id}.id`, message.author.id)
     message.channel.send("<a:approve:734933612906020974> | Fuiste establecido como ausente en mi sistema!, con la razon: "+razon, {allowedMentions: {parse: []}})
 	}
	}