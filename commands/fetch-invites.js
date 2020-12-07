module.exports = {
  name: 'fetch-invites',
  aliases: ["guild-invites", "buscar-invitaciones"],
  category: 'utilidad',
  owners: false,
  desc: 'Obten todas las invitaciones del servidor',
  usage: '<prefix>fetch-invites',
  execute: async(client, message, args) =>{
  let deny = require("../utils/emojis/deny.js"),
  approve = require("../utils/emojis/approve.js")
  let embed = new (require("discord.js")).MessageEmbed()
  .setColor(client.color)
  let invites;
  let invites2;
  let invitesMap;
  if(!message.guild.me.hasPermission("MANAGE_GUILD")) {
  invites = `${deny} | Debo de tener el permiso **MANAGE_GUILD** para poder ver las invitaciones del servidor`
  return message.channel.send(invites)
  }else{
  invites = `${approve} | Invitaciones del servidor:`
  invites2 = await message.guild.fetchInvites()
  invitesMap = invites2.map(q => `\`${q.code}\` = ${q.channel} > ${q.inviter} < ${q.uses}`).join("\n") || "Sin invitaciones"
  embed.addField(invites, invitesMap)
  }
  message.channel.send(embed)
  }
}