module.exports = {
	name: "buy",
	aliases: ["comprar"],
	category: "economia",
	owners: false,
	cooldown: 10,
	desc: "",
	usage: "<prefix>buy <item>",
	execute: async(client, message, args) =>{
		let Dinero = new (require("megadb")).crearDB("money")
		if(!args.length) {
message.channel.send("<a:deny:718249526217015338> | Debes de escribir el articulo que quieres")
	}
	if(args[0] == "tarjeta") {
		if(args[1] == "de") {
			if(args[2] == "naikoins") {
     		if(parseInt(await Dinero.obtener(`${message.guild.id}.${message.author.id}.money`)) < 10000) return message.channel.send("<a:deny:718249526217015338> | No tienes `10.000` "+await Dinero.obtener(`${message.guild.id}.currency`)+", por eso no puedes comprar la tarjeta")
		message.channel.send("<a:approve:734933612906020974> | Compra exitosa!")
	Dinero.restar(`${message.guild.id}.${message.author.id}.money`, 10000)
	Dinero.establecer(`${message.guild.id}.${message.author.id}.tarjeta`, 500)
			}
		}
	}
	}
	}