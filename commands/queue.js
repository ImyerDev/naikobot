let { Util } = require("discord.js")
let ytdl = require("ytdl-core")
module.exports = {
	name: "queue",
	aliases: ["q", "canciones"],
	category: "musica",
	owners: true,
	desc: "Obten todas las canciones que se hicieron!",
	usage: "<prefix>play <music>",
    execute: async(client, message, args) =>{
        if(!client.devs.includes(message.author.id)) return message.channel.send("<a:deny:718249526217015338> | El comando esta en prueba, solamente el creador de Naiko puede usarlo")
				const serverQueue = client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('<a:deny:718249526217015338> | No hay nada reproduciendo');
		return message.channel.send(`
__**Queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**<a:approve:734933612906020974> | Ahora reproduciendo:** ${serverQueue.songs[0].title}
		`);
		}
		}