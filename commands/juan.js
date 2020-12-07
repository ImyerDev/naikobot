module.exports = {
	name: "juan",
	aliases: ["iamjuan"],
	category: "No tiene",
	owners: "iAmJuan",
	desc: "Comando exclusivo!",
	usage: "<prefix>juan",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
		if(!["654387658734436364", "450291712703856650"].includes(message.author.id)) return;
		let embed = new Discord.MessageEmbed()
.setDescription("**El mejor desarrollador del universo.... Juan!**")
.setImage(client.users.cache.get("654387658734436364").avatarURL())
.setColor(client.color)
message.channel.send(embed)
	}
}