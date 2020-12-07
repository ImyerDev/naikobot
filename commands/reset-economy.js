module.exports = {
    name: "reset-economy",
    aliases: ["resetear-economia"],
    category: "economia",
    owners: false,
    desc: "Resetea la economia del servidor donde lo ejecutaste",
    usage: "<prefix>reset-economy <number>",
    execute: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<> | Debes de tener el permiso **MANAGE_MESSAGES** para hacer esta accion")

	message.channel.send("<> | Economia reseteada en el server "+message.guild.name)
	new (require("megadb")).crearDB("money").eliminar(`${message.guild.id}`)
	}
	}