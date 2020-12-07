module.exports = {
	name: "editsnipe",
	aliases: ["mensajes-editados"],
	category: "utilidad",
	owners: false,
	desc: "Mira los mensajes editados en x canal",
	usage: "<prefix>editsnipe || <prefix>editsnipe <channel_mention>",
	execute: async(client, message, args) =>{
	let Discord = require("discord.js") 
  
    let channel = message.mentions.channels.first() || message.channel

    let msg = client.snipes.get(channel.id)

    if (!msg){    
        return message.channel.send(`<a:deny:718249526217015338> | No se edito recientemente ningun mensaje`)
      } else {

 if(msg.message.embeds && msg.message.cleanContent < 1){
   
   message.channel.send(`Autor: **${msg.message.author.tag}**\nCanal: <@#${msg.message.channel.id}#>\nMensaje editado:`)
   message.channel.send(msg.message.embeds)

 } else {
    let main = new Discord.MessageEmbed()
 .setColor(client.color)
 .setDescription("<a:approve:734933612906020974> | He detectado un mensaje editado!")
 .addField("Mensaje editado:", msg.message.cleanContent)
 .addField("Autor:", "**"+msg.message.author.tag+"**")
 .addField("Canal:", `<#${await msg.message.channel.id}>`)
 message.channel.send(main);
 }

      }
}
}