module.exports = {
	name: "translate",
	aliases: ["gtranslate"],
	category: "utilidad",
	owners: false,
	desc: "Obtiene la traduccion de tal texto",
	usage: "<prefix>translate",
	execute: async(client, message, args) =>{
	let lang = args[0]
    if(!lang) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el lenguaje que usare para traducirlo a ese lenguaje")
	let text = args.slice(1).join(" ")
	if(!text) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el texto")
	require("yandex-translate-api")("trnsl.1.1.20190728T171650Z.c9213965a17ff06e.85162b7754b83abbf688933571ec61c8bf249313").translate(text, {to: lang}, function(err, result) {
	if(err) return message.channel.send("<a:deny:718249526217015338> | Ese lenguaje no existe!")
	let embed = new (require("discord.js")).MessageEmbed()
	.setColor(client.color)
	.setDescription("<a:approve:734933612906020974> | Traducido correctamente!")
	.addField("Texto:", text)
	.addField("Lenguaje:", lang)
	.addField("Texto traducido:", result.text)
	message.channel.send(embed)
	})
	}
	}