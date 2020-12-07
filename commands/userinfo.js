module.exports = {
	name: "userinfo",
	aliases: ["u", "whois", "user"],
	category: "informacion",
	owners: false,
	desc: "Obtiene la informacion de tu usuario",
	usage: "<prefix>user",
	execute: async(client, message, args) =>{
		let Discord = require("discord.js")
	let usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let moment = require("moment")
        require("moment-duration-format")
/*	const embed = new (require("discord.js")).MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.addField("Información General:", `**Nombre:** ${usuario.username}
**ID:** ${usuario.id}
**Discriminador:** ${usuario.user.discriminator}
**Apodo:** ${usuario.nickname ? usuario.nickname : "No tiene"}
**Entró al servidor:** ${usuario.joinedAt.toLocaleDateString()}
**Creó su cuenta:** ${usuario.createdAt.toLocaleDateString()}`, true)
.addField("Roles:", `Rol más alto: ${usuario.roles.highest}
Roles: ${usuario.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(" | ")}`, true)

message.channel.send(embed)*/
let permissions = {
	CREATE_INSTANT_INVITE: "Crear invitacion instantanea", 
	KICK_MEMBERS: "Patear miembros", 
	BAN_MEMBERS: "Sancionar miembros", 
	ADMINISTRATOR: "Administrador", 
	MANAGE_CHANNELS: "Manejar canales", 
	MANAGE_GUILD: "Manejar gremio", 
	ADD_REACTIONS: "Agregar reacciones", 
	VIEW_AUDIT_LOG: "Ver registros de auditoria", 
	PRIORITY_SPEAKER: "Prioridad de voz", 
	STREAM: "Corriente", 
	VIEW_CHANNEL: "Ver canales", 
	SEND_MESSAGES: "Enviar mensajes", 
	SEND_TTS_MESSAGES: "Enviar mensajes TTS", 
	MANAGE_MESSAGES: "Manejar mensajes", 
	EMBED_LINKS: "Incrustar enlaces", 
	ATTACH_FILES: "Adjuntar archivos", 
	READ_MESSAGE_HISTORY: "Leer historial de mensajes", 
	MENTION_EVERYONE: "Mencionar a todos", 
	USE_EXTERNAL_EMOJIS: "Usar emojis externales", 
	VIEW_GUILD_INSIGHTS: "Ver percepciones del gremio", 
	CONNECT: "Conectar en canal de voz", 
	SPEAK: "Hablar en canal de voz", 
	MUTE_MEMBERS: "Silenciar miembros", 
	DEAFEN_MEMBERS: "Ensordecer miembros", 
	MOVE_MEMBERS: "Mover miembros",
	USE_VAD: "Usar vad", 
	CHANGE_NICKNAME: "Cambiar apodo", 
	MANAGE_NICKNAMES: "Manejar apodos", 
	MANAGE_ROLES: "Manejar roles", 
	MANAGE_WEBHOOKS: "Manejar webhooks", 
	MANAGE_EMOJIS: "Manejar emojis",
}
let list2 = []
for(let p of await usuario.permissions.toArray().join(", ")) {
list2.push(permissions[p])
}
/*let badges = {
  DISCORD_EMPLOYEE: ""
DISCORD_PARTNER:  "",
HYPESQUAD_EVENTS: "",
BUGHUNTER_LEVEL_1: "",
HOUSE_BRAVERY: "",
HOUSE_BRILLIANCE: "",
HOUSE_BALANCE: "",
EARLY_SUPPORTER: "",
TEAM_USER: "",
SYSTEM: "",
BUGHUNTER_LEVEL_2: "",
VERIFIED_BOT: "",
VERIFIED_DEVELOPER: "",
}*/
let bot;
if(usuario.user.bot == true) {
	bot = "Si"
}
if(usuario.user.bot == false) {
	bot = "No"
}
if(usuario.id == client.user.id) {
	let embed = new Discord.MessageEmbed()
.setAuthor(usuario.user.tag, usuario.user.avatarURL())
.addField(":blue_book: |  Informacion General:", [
"**ID**: "+usuario.id+"",
"**Apodo**: "+usuario.displayName,
"**Discriminador**: #"+usuario.user.discriminator+"",
"**Permisos**: ```"+usuario.permissions.toArray().join(", ")+"```"
])
.addField(":newspaper: | Roles:", [
"**Role mas alto**: "+usuario.roles.highest.name,
"**Cantidad de roles**: "+usuario.roles.cache.size,
"**Lista de roles**: "+usuario.roles.cache.filter(q => q.name !== "@everyone").map(q => q.name).join("** | **")
])
.addField(":question: | Informacion de la cuenta:", [
"**Cuenta creada**: "+usuario.user.createdAt.toLocaleDateString()+" (hace "+moment.duration(Date.now() -  usuario.user.createdAt).format("D [dias ]")+")",
"**Entro al servidor**: "+usuario.joinedAt.toLocaleDateString()+" (hace "+moment.duration(Date.now() - usuario.joinedAt).format("D [dias ]")+")",
"**Bot**: "+bot+""
])
.setThumbnail(usuario.user.avatarURL())
.setColor(client.color)
return message.channel.send(embed)
}
let embed = new Discord.MessageEmbed()
.setAuthor(usuario.user.tag, usuario.user.avatarURL())
.addField(":blue_book: |  Informacion General:", [
"**ID**: "+usuario.id+"",
"**Apodo**: "+usuario.displayName+"",
"**Discriminador**: #"+usuario.user.discriminator+"",
"**Permisos**: ```"+usuario.permissions.toArray().join(", ")+"```"
])
.addField(":newspaper: | Roles:", [
"**Role mas alto**: "+usuario.roles.highest.name,
"**Cantidad de roles**: "+usuario.roles.cache.size,
"**Lista de roles**: "+usuario.roles.cache.filter(q => q.name !== "@everyone").map(q => q.name).join("** | **")
])
.addField(":question: | Informacion de la cuenta:", [
"**Cuenta creada**: "+require("moment").utc(usuario.user.createdAt).format("DD/MM/YYYY hh:mm")+"",
"**Entro al servidor**: "+require("moment").utc(usuario.joinedAt).format("DD/MM/YYYY hh:mm")+"",
"**Bot**: "+bot+""
])
.addField(":page_with_curl: | Servidores en comun:", [
"**Cantidad de servidores**: "+client.guilds.cache.filter(q => q.members.cache.get(usuario.id)).size,
"**Lista de servidores en comun**: ```"+client.guilds.cache.filter(q => q.members.cache.get(usuario.id)).map(q => q.name).join(", ")+"```"
])
.setThumbnail(usuario.user.avatarURL())
.setColor(client.color)
message.channel.send(embed)
 	}
	}