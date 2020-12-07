module.exports = {
	name: "esay",
	aliases: [],
	category: "diversion",
	owners: false,
	cooldown: 10,
	desc: "Envia un embed con un texto",
	usage: "<prefix>esay <text>",
	execute: async(client, message, args) =>{
	if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el texto del embed")
	let array = []
	array.push(args.join(" "))
		if(array.includes("@everyone") && array.includes("@here")) return;
	let embed = new (require("discord.js")).MessageEmbed()
	.setDescription(args.join(" "))
	.setColor(client.color)
	message.channel.send(embed)
	}
}