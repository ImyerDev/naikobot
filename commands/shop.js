module.exports = {
	name: "shop",
	aliases: ["tienda"],
	category: "economia",
	owners: false,
	desc: "Compra el item/articulo que necesitas",
	usage: "<prefix>shop || <prefix>shop <item>",
	execute: async(client, message, args) =>{
		let Dinero = new (require("megadb")).crearDB("money")
    let embed = new (require("discord.js")).MessageEmbed()
	.setDescription("Tienda de articulos (1 articulo, proximamente mas)")
	.addField("<a:creditcard:736951807720554508> | Tarjeta de NaiKoins", "Sale `10.000` "+await Dinero.obtener(`${message.guild.id}.currency`)+", tiene 100 NaiKoins (🎃 -400 por halloween 🎃")
	.setColor(client.color)
	.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
	message.channel.send(embed)
	}
	}