module.exports = {
	name: "slut",
	aliases: ["prostituir"],
	category: "economia",
	owners: false,
	desc: "Prostituite para obtener dinero",
	usage: "<prefix>slut",
	execute: async(client, message, args) =>{
	let db = require("megadb")
	let Dinero = new db.crearDB("money")
	let random = Math.floor(Math.random() * 300)
	if(!Dinero.tiene(`${message.guild.id}.currency`)) {
		 Dinero.establecer(`${message.guild.id}`, "<:coin:720817136330735636>")
	}
	if(!Dinero.tiene(`${message.guild.id}.${message.author.id}`)) {
		 Dinero.establecer(`${message.guild.id}.${message.author.id}.money`, 0)
	}
	let a;
	if(random < 150) {
    a = "A "+message.guild.members.cache.random().user.username+" no le gusto lo que hiciste, perdiste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	message.channel.send(a)
	Dinero.restar(`${message.guild.id}.${message.author.id}.money`, random)
	} else if(random > 210) {
		a = "A "+message.guild.members.cache.random().user.username+" le gusto lo que hiciste, ganaste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	message.channel.send(a)
	Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random)
	} else if(random > 184) {
	a = "A "+message.guild.members.cache.random().user.username+" le gusto lo que hiciste, ganaste `"+random+"` "+await Dinero.obtener(`${message.guild.id}.currency`)
	message.channel.send(a)
	Dinero.sumar(`${message.guild.id}.${message.author.id}.money`, random)
	}
	}
	}