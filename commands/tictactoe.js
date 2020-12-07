module.exports = {
	name: "tictactoe",
	aliases: ["ttt"],
	category: "diversion",
	owners: false,
	desc: "Juega tres en raya con cualquier persona!",
	usage: "<prefix>tictactoe <mentioned>",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
	let ttt = require("tresenraya")
	if(!message.mentions.users.first()) return message.channel.send("<a:deny:718249526217015338> | Debes de mencionar a un usuario para comenzar a jugar!")
	if(message.mentions.users.first().bot) return message.channel.send("<a:deny:718249526217015338> | No puedes jugar con un bot")
	let game = new ttt.partida({jugadores: [message.author.id, message.mentions.users.first().id]})
	game.on('ganador', (jugador, tablero, paso) => {
    let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
.setDescription("Gano "+client.users.cache.get(jugador).username+"!")
.addField("Tablero:", game.tablero.string)
.addField("Ganador y perdedor:", client.users.cache.get(jugador).username+", "+client.users.cache.get(game.perdedor).username)
.addField("Pasos:", paso)
.setColor(client.color)
message.channel.send(embed)
});
  
game.on('empate', (jugadores, tablero, paso) => {
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
.setDescription("Empate!")
.addField("Tablero:", game.tablero.string)
.addField("Ficha:", game.turno.ficha)
.addField("Jugadores:", "<@"+message.author.id+"> y <@"+message.mentions.users.first().id+">")
.setColor(client.color)
message.channel.send(embed)
});
 let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
.setDescription("Empieza "+client.users.cache.get(game.turno.jugador).username+", elige un numero del 1 al 9\n")
.addField("Tablero:", game.tablero.string)
.addField("Ficha:", game.turno.ficha)
.setColor(client.color)
message.channel.send(embed)
const colector = message.channel.createMessageCollector(msg => msg.author.id === game.turno.jugador && !isNaN(msg.content) && (Number(msg.content) >= 1 && Number(msg.content) <= 9) && game.disponible(msg.content) && !game.finalizado);
 
colector.on('collect', (msg) => {
      
  game.elegir(msg.content);
  
  if(game.finalizado) {
    
    colector.stop();
    return;
    
  }
  let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
.setColor(client.color)
.setDescription("Turno de "+client.users.cache.get(game.turno.jugador).username+"\n")
.addField("Tablero:", game.tablero.string)
.addField("Ficha:", game.turno.ficha)
message.channel.send(embed)
    
});
	}
}