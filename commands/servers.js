module.exports = {
  name: "servers",
  aliases: [],
  category: 'informacion',
  owners: false,
  desc: 'Obten todos los usuarios y servidores de Naiko',
  usage: '<prefix>servers',
  execute: async(client, message, args) =>{
  let Discord = require("discord.js")
  message.channel.send(`Estoy en **${client.guilds.cache.size}** servidores con **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}** usuarios!`)
}
}