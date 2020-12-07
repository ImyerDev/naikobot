let Levels = new (require("../utils/functions/discord-levels.js"))()
let Prefix = new (require("../utils/functions/prefix.js"))()
let Discord = require("discord.js")
module.exports = async(client, message) =>{
        /*let lang = new (require("megadb")).crearDB("lang").obtener(message.guild.id)
        let idioma = await new (require("../utils/lang.js"))(client).language[await lang]*/
	client.timer = new Discord.Collection()
        let saberchat = new (require("megadb")).crearDB("saberchat")
        if(saberchat.tiene(message.guild.id)) {
         setTimeout(function(){
         saberchat.eliminar(message.guild.id)
         }, 100000)
        }
	let timer = client.timer
		if(!new (require("megadb")).crearDB("money").tiene(`${message.guild.id}.currency`)) {
		 new (require("megadb")).crearDB("money").establecer(`${message.guild.id}.currency`, "<:coin:720817136330735636>")
	}
	let prefix;
	let findone = await client.prefixes.findOne({guildID: message.guild.id})
        if(!findone) {
        await client.prefixes.create({guildID: message.guild.id, prefix: "-"})
        }
        if(findone[0]) {
    prefix = await findone.prefix
	}else{
	prefix = "-";
        }

	let afk = new (require("megadb")).crearDB("afk")
			if(afk.tiene(`${message.guild.id}.${message.author.id}.reason`)) {
				afk.eliminar(`${message.guild.id}.${message.author.id}.reason`)
			return message.channel.send("¡Bienvenido de vuelta!")
			}
	let queue = client.queue.get(message.guild.id)
/*  let link = new db.crearDB("links")
    const links = [
    "discord.gg",
    "discord.me",
    "discord.io/",
    "discord.com/invite",
    "discordapp.com/invite",
    "https://",
    "https://google.com/",
    "https://discord.gg/",
    "https://invite.gg/",
    "invite.gg"
  ]
    if (links.some(word => message.content.toLowerCase().includes(word))) {
      if(message.author.bot) return;
      let embed = new Discord.MessageEmbed() //necesitamos el emoji animado :'c
      .setDescription("<a:deny:718249526217015338> | Links / invitations are not allowed on this guild.")
      .addField("Guild name:", message.guild.name)
      .setColor("36393e")
      .setThumbnail("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2F404-error&psig=AOvVaw1q-t1Rgr6yGhJeAkRvqCAP&ust=1591400223225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjS1dyr6ekCFQAAAAAdAAAAABAJ")
       message.channel.send(embed)
      }//el de rechazado, la cruz*/
  let Database = require("megadb")
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);

if (message.content.match(RegMention)) {
  if(message.author.bot) return;
	let embed = new Discord.MessageEmbed()
	.addField("<:batteryfull:728661611233148968> | Ayuda Naiko:", "`"+prefix+"help`", true)
	.addField("<a:ole_lo_caracole:718123389080043600> | Developer:", "`"+client.users.cache.get("450291712703856650").username+"`", false)
	.addField("<:discord:723906848692109333> | Bot server:", "`https://discord.gg/QmMRp7g`", true)
	.setColor("36393e")
	.setThumbnail(message.author.displayAvatarURL())
	message.channel.send(embed)
}
if(message.content == "F") {
  if(message.author.bot) return;
  message.react("722566835643482123")
}
      if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) {
	if (!Levels.fetch(message.author.id, message.guild.id)) {
		  if (!timer.get(message.author.id)) {
			timer.set(message.author.id, true);
			setTimeout(() => {
			  timer.delete(message.author.id);
			}, 120000);
			const randomAmountOfXp = Math.floor(Math.random() * 30) + 1
			const hasLeveledUp = await Levels.appendXP(
			  message.author.id,
			  message.guild.id,
			  randomAmountOfXp
			);
			if (hasLeveledUp) {
			  const user = await Levels.fetch(message.author.id, message.guild.id);
			message.channel.send(`${message.user.username}, has subido de nivel a ${user.nivel}`).then(m => m.delete(3000)).catch(error => console.log(error)) 
			}
		  }
		}
	return;
  }
  //Argumentos
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  //Command Handler
  	  let enfriamientos = client.cooldown
  let cooldowns = client.cooldowns
  let comando = client.comandos.get(command) || client.comandos.find(q => q.aliases.includes(command))
  if(command < 1) return;
  if(comando) {
          
          if(!client.devs.includes(message.member.id)) {
                if(comando.owners) return;
          }
	  	let msgms = new Date() - message.createdAt
  	if (!cooldowns.has(comando.name)) {
	
  	cooldowns.set(comando.name, new Discord.Collection())
	
  }

	const now = Date.now()

	const timestamps = cooldowns.get(comando.name)
	
  const cooldownAmount = enfriamientos.get(`${message.guild.id}.${comando.name}`) * 1000 || 10 * 1000

	if (timestamps.has(message.author.id)) {
		
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount
		if (now < expirationTime) {

			const timeLeft = (expirationTime - now) / 1000
		if(!client.devs.includes(message.author.id)) {
	
      return message.channel.send(`<a:deny:718249526217015338> | Debes de esperar **${timeLeft.toFixed(1)}** segundo/s para volver a usar el comando`)
		
    }else{
		timestamps.delete(message.author.id)
	}
		}
}

	timestamps.set(message.author.id, now)

	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

	try {
	let usos = new (require("megadb")).crearDB("usos")
	      let x = await client.blacklist.findOne({userID: message.author.id});
        if (x) {

       let embed = new Discord.MessageEmbed()
.setDescription("Estas blacklisteado")
.addField("Razon:", x.reason ? x.reason : "Razon no especificada")
.addField("Por:", x.addedBy ? client.users.cache.get(x.addedBy) : "Usuario no encontrado")
.addField("En:", (x.userAdded).toLocaleString())
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL())
 return message.channel.send(embed)
		}
	usos.sumar("Usos", 1)
	comando.execute(client, message, args)
	console.log(message.author.tag+" uso el comando "+comando.name)
  } catch (e) {
		
    console.log(e)

	}
  }else{
	return;
  }
  }