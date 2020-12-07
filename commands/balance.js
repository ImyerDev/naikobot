module.exports = {
	name: "balance",
	aliases: ["bal"],
	category: "economia",
	owners: false,
	cooldown: 10,
	desc: "Observa tu billetera la plata que tienes en la tarjeta y en el banco, tambien puedes saber el total de plata que tienes",
	usage: "<prefix>balance",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
		let Dinero = new (require("megadb")).crearDB("money")
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
.addField("Billetera:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.money`) || "0")
.addField("Tarjeta:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.tarjeta`) || "No tiene")
.addField("Banco:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.banco`) || "0")
.addField("Total:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.money`) || "0")
.addField("Puntos de Ladron:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.puntos`) || "0")
.addField("Rango de Ladron:", await Dinero.obtener(`${message.guild.id}.${message.author.id}.rango`) || "No tiene")
.setColor("RANDOM")
message.channel.send(embed)
}
}