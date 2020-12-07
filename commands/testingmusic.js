module.exports = {
  name: "testingmusic",
  aliases: ['p'],
  category: "desarrolladores",
  owners: false,
  desc: "Test",
  usage: "<prefix>testingmusic <music_name>",
  execute: async (client, message, args) => {
    console.log('HOLA :C')
  //if(!client.musicUse.includes(message.author.id)) return;
  client.distube.play(message, args.join(' '))
 client.distube.on("searchResult", (message, result) => {
                 let i = 0;
                message.channel.send(`**Escoge una opcion a escuchar**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*En 60 segundos se cancela*`)
            })
  }
}