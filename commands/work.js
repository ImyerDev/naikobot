module.exports = {
	name: "work",
	aliases: ["trabajar"],
	category: "economia",
	owners: false,
	desc: "Trabaja para obtener mas dinero y ",
	usage: "<prefix>work",
	execute: async(client, message, args) =>{
	let db = require("megadb")
	let Dinero = new db.crearDB("money")
	let Discord = require("discord.js")
	let random = Math.floor(Math.random() * 100)
	let puntos = Math.floor(Math.random() * 2)
		if(!new (require("megadb")).crearDB("money").tiene(`${message.guild.id}.currency`)) {
		 new (require("megadb")).crearDB("money").establecer(`${message.guild.id}.currency`, "<:coin:720817136330735636>")
	}
	if(!Dinero.tiene(`${message.guild.id}.${message.author.id}`)) {
		 Dinero.establecer(`${message.guild.id}.${message.author.id}.money`, 0)
	}
	let a;
	if(random < 15) {
    a = "Te atraparon robandole a "+message.guild.members.cache.random().user.username+", perdiste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	message.channel.send(a)
	Dinero.restar(`${message.guild.id}.${message.author.id}.money`, random)
	} else if(random > 25) {
		a = "Le robaste a "+message.guild.members.cache.random().user.username+" sin que se diera cuenta, ganaste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	if(message.member.roles.cache.has("714460242850742338")) {
		let embed = new Discord.MessageEmbed()
		.setDescription(`Le robaste a ${message.guild.members.cache.random().user.username} sin que se diera cuenta, ganaste \`${random+random+random}\` ${await Dinero.obtener(`${message.guild.id}.currency`)}`)
		.addField("Todo lo que obtuviste:", [
		`${random+random+random} ${await Dinero.obtener(`${message.guild.id}.currency`)}`,
		`${puntos+puntos+puntos} Puntos de Ladron`
		])
		.setColor("RANDOM")
		return message.channel.send(embed)
		Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random+random+random)
		Dinero.sumar(`${message.guild.id}.${message.author.id}.puntos`, puntos+puntos+puntos)
	}
		let embed = new Discord.MessageEmbed()
		.setDescription(a)
		.addField("Todo lo que obtuviste:", [
		`${random} ${await Dinero.obtener(`${message.guild.id}.currency`)}`,
		`${puntos} Puntos de Ladron`
		])
		.setColor("RANDOM")
		message.channel.send(embed)
	Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random)
	if(!Dinero.tiene(`${message.guild.id}.${message.author.id}.puntos`)) {
	Dinero.establecer(`${message.guild.id}.${message.author.id}.puntos`, 0)
	}
	Dinero.sumar(`${message.guild.id}.${message.author.id}.puntos`, puntos)
	} else if(random > 59) {
		a = "Le robaste a "+message.guild.members.cache.random().user.username+" sin que se diera cuenta, ganaste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	if(message.member.roles.cache.has("714460242850742338")) {
		let embed = new Discord.MessageEmbed()
		.setDescription(`Le robaste a ${message.guild.members.cache.random().user.username} sin que se diera cuenta, ganaste \`${random+random+random}\` ${await Dinero.obtener(`${message.guild.id}.currency`)}`)
		.addField("Todo lo que obtuviste:", [
		`${random+random+random} ${await Dinero.obtener(`${message.guild.id}.currency`)}`,
		`${puntos+puntos+puntos} Puntos de Ladron`
		])
		.setColor("RANDOM")
		return message.channel.send(embed)
		Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random+random+random)
		Dinero.sumar(`${message.guild.id}.${message.author.id}.puntos`, puntos+puntos+puntos)
	}
		let embed = new Discord.MessageEmbed()
		.setDescription(a)
		.addField("Todo lo que obtuviste:", [
		`${random} ${await Dinero.obtener(`${message.guild.id}.currency`)}`,
		`${puntos} Puntos de Ladron`
		])
		.setColor("RANDOM")
		message.channel.send(embed)
	Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random)
	if(!Dinero.tiene(`${message.guild.id}.${message.author.id}.puntos`)) {
	Dinero.establecer(`${message.guild.id}.${message.author.id}.puntos`, 0)
	}
	Dinero.sumar(`${message.guild.id}.${message.author.id}.puntos`, puntos)
	}
	}
	}