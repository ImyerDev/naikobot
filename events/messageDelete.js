module.exports = async(client, message) =>{
	let logs = await require("../utils/models/logs.js").findOne({guildID: message.guild.id})
	if(!logs) {
    		    client.snipes.set(message.channel.id, {
      message: message
    })
	return;
	}
	let channel = message.guild.channels.cache.get(logs.channelID)
	if(logs) {
		    client.snipes.set(message.channel.id, {
      message: message
    })
		let msg = client.snipes.get(message.channel.id)
		if(msg.message.embeds && msg.message.content < 1) {
	channel.send("<:naikoprotection:727511812366401616> | He visto un mensaje eliminarse!\n\nAutor del mensaje:\n`"+msg.message.author.tag+"`\nContenido del mensaje:", msg.message.embeds)
		}else{
		let embed = new (require("discord.js")).MessageEmbed()
		.setDescription("He visto un mensaje eliminarse!")
		.addField("Autor del mensaje:", "`"+msg.message.author.tag+"`")
		.addField("Contenido del mensaje:", msg.message.content)
		.setColor("RANDOM")
		.setAuthor("| Naiko Protection", "https://cdn.discordapp.com/emojis/727511812366401616.png?v=1")
	channel.send(embed)
	}
	}
	}