module.exports = {
	name: "setcooldown",
	aliases: ["establecer-enfriamiento"],
	category: "configuracion",
	owners: false,
	desc: "Establece un enfriamiento/cooldown a un comando",
	usage: "<prefix>setcooldown <command_name> <time>",
	execute: async(client, message, args) =>{
	if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<a:deny:718249526217015338> | Debes de tener el permiso **MANAGE_GUILD** para hacer esta accion")
    let cooldown = client.cooldown
	let command = args[0]
	let time = args[1]
	let realCommand = client.comandos.get(command)
	if(!command) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el nombre de un comando")
	if(!realCommand) return message.channel.send("<a:deny:718249526217015338> | No encontre ese comando")
	if(cooldown.get(`${message.guild.id}.${realCommand.name}`)) return message.channel.send("<a:deny:718249526217015338> | Anteriormente han puesto un cooldown a el comando `"+realCommand.name+"`")
	if(!time) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el cooldown que usara ese comando")
	if(isNaN(!time)) return message.channel.send("<a:deny:718249526217015338> | Eso no es algo que tenga que ver con el tiempo")
	if(time.length > 2 || parseInt(time) > 10) return message.channel.send("<a:deny:718249526217015338> | No puedo poner el cooldown durante mas de 10 segundos")
    cooldown.set(`${message.guild.id}.${realCommand.name}`, ""+time+"")
	message.channel.send("<a:approve:734933612906020974> | El cooldown que has puesto, lo puse correctamente a el comando `"+realCommand.name+"`")
	}
	}