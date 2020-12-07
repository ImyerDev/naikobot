  module.exports = {
  name: "serverinfo",
  aliases: ["server", "s"],
  owners: false,
  category: "informacion",
  desc: "Muestra la informacion del servidor",
  usage: "<prefix>serverinfo",
  execute: async (client, message, args) => {
let Discord = require("discord.js")
let server = args[0] ? client.guilds.cache.get(args[0]) || client.guilds.resolve(args[0]) || client.guilds.fetch(args[0]) : message.guild
let moment = require("moment")
require("moment-duration-format")
let owner = server.owner
let features = await server.features
let Features = {
"ANIMATED_ICON": "Icono animado",
"BANNER": "Banner",
"COMMERCE": "Comercial",
"COMMUNITY": "Comunidad",
"DISCOVERABLE": "Reconocible",
"FEATURABLE": "Ventajable",
"INVITE_SPLASH": "Fondo de invitacion",
"NEWS": "Anuncios en el servidor",
"PARTNERED": "Asociado con Discord",
"VANITY_URL": "URL de invitacion personalizada",
"VERIFIED": "Servidor verificado",
"VIP_REGIONS": "Regiones VIP",
"WELCOME_SCREEN_ENABLED": "Pantalla de bienvenida en el servidor",
}
let list = []
for(let f of features) {
  list.push(Features[f])
}
let roles = ""+server.roles.cache.filter(q => q.name !== "@everyone").map(q => q).join("** | **")
let embed = new Discord.MessageEmbed()
.setAuthor(server.name, server.iconURL())
.addField(":blue_book: |  Informacion del creador:", [
"**ID**: "+owner.id+"",
"**Apodo**: "+owner.displayName+"",
"**Discriminador**: #"+owner.user.discriminator+""
])
.addField(":newspaper: | Roles:", [
"**Role mas alto**: "+server.roles.highest.name,
"**Cantidad de roles**: "+server.roles.cache.size,
"**Lista de roles**: "+roles.slice(0, 900),
])
.addField(":question: | Informacion del gremio:", [
"**Servidor creado**: "+server.createdAt.toLocaleDateString()+" (hace "+moment.duration(Date.now() - server.createdAt).format("D [dias ]")+")",
"**Lista de ventajas**: "+list.join(", "),])
.addField(":page_with_curl: | Server Boost:", [
"**Cantidad de boosteos**: "+server.premiumSubscriptionCount,
"**Nivel de boosteo**: "+server.premiumTier
])
.setThumbnail(server.iconURL())
.setColor(client.color)
message.channel.send(embed)
  }
  }