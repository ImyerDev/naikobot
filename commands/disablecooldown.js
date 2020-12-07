module.exports = {
	name: "disablecooldown",
	aliases: ["desactivar-enfriamiento"],
	category: "configuracion",
	owners: false,
	desc: "Desactiva un enfriamiento/cooldown",
	usage: "<prefix>disablecooldown",
	execute: async(client, message, args) =>{
	if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<a:deny:718249526217015338> | Debes de tener el permiso **MANAGE_GUILD** para hacer esta accion")
    let cooldown = client.cooldown
	let command = args[0]
	let realCommand = client.comandos.get(command)
	if(!command) return message.channel.send("<a:deny:718249526217015338> | Debes de poner un comando existente!")
	if(!cooldown.get(`${message.guild.id}.${realCommand.name}`)) return message.channel.send("<a:deny:718249526217015338> | Ese comando no tiene cooldown")
	if(!realCommand) return message.channel.send("<a:deny:718249526217015338> | No encontre ese comando!")
    cooldown.delete(`${message.guild.id}.${realCommand.name}`)
	message.channel.send("<a:approve:734933612906020974> | Elimine el cooldown del comando `"+realCommand.name+"`!")
	}
	}