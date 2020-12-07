module.exports = {
	name: "powershell",
	aliases: ["shell", "power"],
	category: "desarrolladores",
	owners: true,
	desc: "Prueba un codigo",
	usage: "<prefix>powershell <code_process>",
	execute: async(client, message, args) =>{
	 		if(!client.devs.includes(message.author.id)) return message.channel.send("<a:deny:718249526217015338> | Debes de ser creador de Naiko para poder hacer esta accion")
			if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes poner algo para procesar")
		require("child_process").exec(args.join(" "), (err, stdout, stderr) => {
if(err) {
	message.channel.send("<a:deny:718249526217015338> | Hubo un error, intentalo mas tarde") 
	console.log(err)
	return;
	}
	let Discord = require("discord.js")
	let code = stdout
	let embed = new Discord.MessageEmbed()
	.setDescription("<a:approve:734933612906020974> | Procesado en `"+client.ws.ping+"` ms")
	.addField("Entrada:", "```js\n"+args.join(" ")+"\n```")
	.addField("Salida:", "```js\n"+code.slice(0, 985)+"\n```")
	.addField("Advertencias:", "\n"+stderr ? "```diff\n + "+stderr+"\n```" : "```diff\n - Ninguna advertencia.\n```"+"\n")
	.setColor(client.color)
	message.channel.send(embed)
	})
	}
}