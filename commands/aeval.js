let bl = new (require("../utils/functions/bl.js"))()

module.exports = {
	name: "aeval",
	aliases: ["ae"],
	category: "desarrolladores",
	owners: true,
	desc: "Prueba un codigo",
	usage: "<prefix>aeval <code>",
	execute: async(client, message, args) =>{
	let Discord = require("discord.js")
	try {
    if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes poner algo para evaluar")
	let code = await eval("(async() => { "+args.join(" ")+" })()")
	let type = typeof code
	let nts = {
		_configs1: {
		string: "String",
		number: "Number",
		object: "Object",
		"function": "Function",
		array: "Array",
		promise: "Promise",
		},
		nottype: "[NTS ???]",
		apierror: "NTSError:"
	}
	      if (typeof code !== "string")
        code = require("util").inspect(code, { depth: 0 });
	let embed = new Discord.MessageEmbed()
	.setDescription("<a:approve:734933612906020974> | Evaluado en `"+client.ws.ping+"` ms")
	.addField("Entrada:", "```js\n"+args.join(" ")+"\n```")
	.addField("Salida:", "```js\n"+code.replace(client.token, "NDcyMzA1OTE5NTMxODEwODE4.Djxc0w.xa3P9IFvmtOJNF3IFpVr2689QYY")+"\n```")
	.addField("Tipo:", "```js\n"+nts._configs1[type]+"\n```")
	.setColor(client.color)
	message.channel.send(embed)
	} catch(e) {
			let nts = {
		_configs1: {
		string: "[NTS Text]",
		number: "[NTS Number]",
		object: "[NTS Object]",
		"function": "[NTS Function]",
		array: "[NTS Array]"
		},
		nottype: "[NTS ???]",
		apierror: "NTS Error: "
	}
	message.channel.send("`ERROR`: ```js\n"+nts.apierror+e.message+"\n```")
	}
	}
}