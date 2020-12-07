module.exports = {
	name: "snipe",
	aliases: ["mensajes-borrados"],
	category: "utilidad",
	owners: false,
	desc: "Mira los mensajes eliminados en x canal",
	usage: "<prefix>snipe || <prefix>snipe <channel_mention>",
	execute: async(client, message, args) =>{
	let Discord = require("discord.js") 
  
    let channel = message.mentions.channels.first() || message.channel

    let msg = client.snipes.get(channel.id)

    if (!msg){    
        return message.channel.send(`<a:deny:718249526217015338> | No se borro recientemente ningun mensaje`)
    } else {

 if(msg.message.embeds && msg.message.cleanContent < 1){
   
   message.channel.send(`Autor: **${msg.message.author.tag}**\nCanal: <#${msg.message.channel.id}>\nMensaje eliminado:`)
   message.channel.send(msg.message.embeds)
   return;

 } else {
    let main = new Discord.MessageEmbed()
 .setColor(client.color)
 .setDescription("<a:approve:734933612906020974> | He detectado un mensaje eliminado!")
 .addField("Mensaje eliminado:", msg.message.cleanContent)
 .addField("Autor:", "**"+msg.message.author.tag+"**")
 .addField("Canal:", `<#${await msg.message.channel.id}>`)
 message.channel.send(main);
 }
    }
  }
}