module.exports = {
  name: "reload",
  aliases: ["reiniciar"],
  category: "desarrolladores",
  owners: true,
  desc: "Reiniciar comandos",
  usage: "<prefix>reload <command_name>",
  execute: async (client, message, args, idioma) => {
	  let emojis = {
		  deny: require("../utils/emojis/deny.js"),
		  approve: require("../utils/emojis/approve.js")
	  }
const cmdname = args[0]
      if(!cmdname) {
	  message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un comando a reiniciar`)// hace control z vos entiendo y disculpa hacía algo
      }
		const command = client.comandos.get(cmdname) || client.comandos.find(q => q.aliases.includes(cmdname))

		if (!command) {
			return message.channel.send(`${emojis.deny} | El comando \`${cmdname.toUpperCase()}\` no existe`)
		}

		delete require.cache[require.resolve(__dirname+"/"+command.name+".js")]
        client.comandos.delete(command.name)
		try {
			const newcmd = require(__dirname+"/"+command.name+".js")
      
			client.comandos.set(newcmd.name, newcmd)
      
			message.channel.send(`${emojis.approve} | El comando \`${command.name.toUpperCase()}\` de la categoria \`${command.category.toUpperCase()}\` a sido reiniciado`)
      
		} catch (e) {
      
			console.log(e)
      
			message.channel.send(`${emojis.deny} | Hubo un error, intentalo de nuevo mas tarde`)
      
		}
    
  }
    }