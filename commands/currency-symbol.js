module.exports = {
	name: "currency-symbol",
	aliases: ["set-currency", "establecer-simbolo", "simbolo-establecer", "currency-set"],
	category: "economia",
	owners: false,
	cooldown: 10,
	desc: "Establece el simbolo de la plata",
	usage: "<prefix>currency-symbol <emoji>",
	execute: async(client, message, args) =>{
    let db = require("megadb")
	let Dinero = new db.crearDB("currencys")
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:deny:718249526217015338> | Debes de tener el permiso **MANAGE_MESSAGES** para poder hacer esta accion")
	let currency = args[0]
    if(!currency) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el emoji (puede ser animado o emoji normal)")
	if(Dinero.tiene(`${message.guild.id}`)) {
	Dinero.eliminar(`${message.guild.id}`)
    message.channel.send("<a:approve:734933612906020974> | Se actualizo correctamente el simbolo de la plata")
	Dinero.establecer(`${message.guild.id}`, currency)
	}else{
	message.channel.send("<a:approve:734933612906020974> | Se actualizo correctamente el simbolo de la plata")
	Dinero.establecer(`${message.guild.id}`, currency)
	}
	}
	}