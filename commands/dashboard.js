module.exports = {
	name: "dashboard",
	aliases: ["dashboard"],
	category: "utilidad",
	owners: false,
	desc: "Controla a naiko con la dashboard",
	usage: "<prefix>dashboard",
	execute: async(client, message, args) =>{
	let Discord = require("discord.js")
	message.channel.send("Actualmente la dashboard de naiko no esta habilitada.")
	}
	}