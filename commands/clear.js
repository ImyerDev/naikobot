module.exports = {
	name: "clear",
	aliases: [],
	category: "moderacion",
	owners: false,
	desc: "Elimina mensajes",
	usage: "<prefix>clear <number>",
	execute: async(client, message, args) =>{
        const Discord = require("discord.js")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de tener el permiso **MANAGE_MESSAGES** para eliminar mensajes de tu servidor`)
        if(!args[0]) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un numero para eliminar mensajes`)
        if(args[0].includes('-')) return message.channel.send(`${require("../utils/emojis/deny.js")} | No se puede poner numeros negativos`)
        const number = Number(args[0])
        if(number >+ 100) return message.channel.send(`${require("../utils/emojis/deny.js")} | No puedes eliminar mas de 100 mensajes`)
        message.channel.send(`${require("../utils/emojis/approve.js")} | ${args[0]} mensajes eliminados`)
	}
	}