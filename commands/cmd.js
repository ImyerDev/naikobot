module.exports = {
	name: "cmd",
	aliases: ["comando", "info"],
	category: "informacion",
	owners: false,
	desc: "Obten la informacion detallada de un comando",
	usage: "<prefix>cmd <command_name>",
	execute: async(client, message, args, idioma) =>{
	let command = args.shift()	
	let comando = client.comandos.get(command)
	if(!command) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el nombre de un comando")
	if(!comando) return message.channel.send("<a:deny:718249526217015338> | Ese comando no existe")
	if(comando.aliases < 1) {
		let embed = new (require("discord.js")).MessageEmbed()
		.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
		.addField("Nombre:", "```diff\n++ "+comando.name+"\n```")
		.addField("Aliases:", "```diff\n++ No tiene```")
		.addField("Categoria:", "```diff\n++ "+comando.category+"\n```")
		.addField("Accesibilidad:", comando.owners ? "```diff\n--- Accesibilidad\n++ Desarrolladores\n```" : "```diff\n++ Todos\n```")
		.addField("Descripcion:", "```diff\n++ "+comando.desc+"\n```")
		.addField("Uso:", "```diff\n++ "+comando.usage+"\n```")
		.setColor(client.color)
		return message.channel.send(embed)
	}
		let embd = new (require("discord.js")).MessageEmbed()
		.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
		.addField("Nombre:", "```diff\n++ "+comando.name+"\n```")
		.addField("Aliases:", "```diff\n++ "+comando.aliases.join(", ")+"```")
		.addField("Categoria:", "```diff\n++ "+comando.category+"\n```")
		.addField("Accesibilidad:", comando.owners ? "```diff\n--- Accesibilidad\n++ Desarrolladores\n```" : "```diff\n++ Todos\n```")
		.addField("Descripcion:", "```diff\n++ "+comando.desc+"\n```")
		.addField("Uso:", "```diff\n++ "+comando.usage+"\n```")
		.setColor("RANDOM")
	message.channel.send(embd)
	}
	}