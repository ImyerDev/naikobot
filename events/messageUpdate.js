module.exports = async(client, old, _new) =>{
	const message = _new
	let logs = await require("../utils/models/logs.js").findOne({guildID: message.guild.id})
if(old.content === message.content) return
 
	if(!logs) {
		    client.editsnipes.set(message.channel.id, {
      message: message
    })
	await client.emit("message", message)
	return;
	}
	let channel = message.guild.channels.cache.get(logs.channelID)
	if(logs) {
				    client.editsnipes.set(message.channel.id, {
      message: message
    })
			let msg = client.editsnipes.get(message.channel.id)
		if(message.embeds && message.content < 1) {
	channel.send("<:naikoprotection:727511812366401616> | He visto un mensaje editarse!\n\nAutor del mensaje:\n`"+msg.message.author.tag+"`\nContenido del mensaje:", msg.message.embeds)
		}else{
	let embed = new (require("discord.js")).MessageEmbed()
	.setDescription("He visto un mensaje editarse!")
	.addField("Autor del mensaje:", "`"+message.author.tag+"`")
	.addField("Antes:", old.content)
	.addField("Ahora:", message.content)
	.setColor("RANDOM")
	.setAuthor("| Naiko Protection", "https://cdn.discordapp.com/emojis/727511812366401616.png?v=1")
	channel.send(embed)
	await client.emit("message", message)
	}
  }
}