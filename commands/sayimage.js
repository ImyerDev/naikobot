module.exports = {
	name: "sayimage",
	aliases: [],
	category: "diversion",
	owners: false,
	desc: "Envia una imagen",
	usage: "<prefix>sayimage <attach_link>",
	execute: async(client, message, args) =>{
	if(!message.attachments.first()) return message.channel.send("<a:deny:718249526217015338> | Debes de poner la imagen")
	let text = ""+message.attachments.first().attachment
	if(text.endsWith(".gif")) return message.channel.send(new (require("discord.js")).MessageAttachment(message.attachments.first().attachment, "sayimage_gif.gif"))
	message.channel.send(new (require("discord.js")).MessageAttachment(message.attachments.first().attachment, "sayimage_png.png"))
	}
}