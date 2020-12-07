let bl = new (require("../utils/functions/bl.js"))()
let Prefix = new (require("../utils/functions/prefix.js"))()
let logs = new (require("../utils/functions/logs.js"))()

module.exports = {
	name: "eval",
	aliases: ["e"],
	category: "desarrolladores",
	owners: true,
	desc: "Prueba un codigo",
	usage: "<prefix>help || <prefix>help <command_name>",
	execute: async(client, message, args, idioma) =>{
	let Discord = require("discord.js")
	try {
    if(!args.join(" ")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner algo a evaluar`)
	let code = await eval(args.join(" "))
	let type = typeof code
	let nts = {
		_configs1: {
		string: "[NTS String]",
		number: "[NTS Number]",
		object: "[NTS Object]",
		"function": "[NTS Function]",
		array: "[NTS Array]",
		promise: "[NTS Promise]"
		},
		nottype: "[NTS ???]",
		apierror: "NTSError:"
	}
	      if (typeof code !== "string")
        code = require("util").inspect(code, { depth: 0 });
		function keys(key) {
        this.key = Object.keys(key)
		return this.key
		}
                async function codigoRandom() {
const one = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const two = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const three = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const four = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const five = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const one2 = one[Math.floor(Math.random() * two.length)]
const two2 = two[Math.floor(Math.random() * three.length)]
const three2 = three[Math.floor(Math.random() * four.length)]
const four2 = four[Math.floor(Math.random() * five.length)]
const five2 = one[Math.floor(Math.random() * one.length)] 
const codigo = `${one2}${two2}${three2}${four2}${five2}`.toUpperCase()
return codigo
                }
	let embed = new Discord.MessageEmbed()
	.setDescription(`${require("../utils/emojis/approve.js")} | Evaluado correctamente!`)//creo que se como espera intento en reload
        // okey
	.addField("Entrada:", "```js\n"+args.join(" ")+"\n```", true)
	.addField("Salida:", "```js\n"+code.slice(0, 985).replace(client.token, "NDcyMzA1OTE5NTMxODEwODE4.Djxc0w.xa3P9IFvmtOJNF3IFpVr2689QYY").replace("/home/runner/thosproyectonoexistente/", "/home/runner/naikobot")+"\n```")
	.addField("Tipo:", "```js\n"+nts._configs1[type]+"\n```", true) //estoy haciendo como es
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