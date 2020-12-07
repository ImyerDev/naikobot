module.exports = {
 name: "ytsearch",
 aliases: ["ytsr", "sryt"],
 category: "informacion",
 owners: false,
 desc: "Obtiene la informacion de tal video",
 usage: "<prefix>ytsearch <search>",
 execute: async(client, message, args) =>{
 if(!args.slice(1).join(" ")) return message.channel.send(`${require("../utils/emojis/deny.js")} | Debes de poner un texto a buscar`)
 let searcher = await require("ytsr")(args.slice(1).join(" "))
 if(searcher.items.length == 0) return message.channel.send(`${require("../utils/emojis/deny.js")} | Lo que has buscado no tiene resultados`)
 let embed = new (require("discord.js")).MessageEmbed()
 .setColor(client.color)
 .setDescription(":radio: | ["+searcher.items[0].title+"]("+searcher.items[0].link+" '"+searcher.items[0].title+"')")
 .addField(":radio_button: | Descripcion:", searcher.items[0].description)
 .addField(":bust_in_silhouette: | Autor:", `Nombre del canal: **${searcher.items[0].author.name}**\nLink al canal: [${searcher.items[0].author.name}](${searcher.items[0].author.ref})`)
 .addField(":arrow_forward: | Duracion:", searcher.items[0].duration)
 .setImage(searcher.items[0].thumbnail)
 .setFooter("Busqueda N° 1/"+searcher.items.length, message.author.avatarURL({dynamic: true}))
 message.channel.send(embed)
 }
}