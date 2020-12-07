  module.exports = {
  name: "avatar",
  aliases: [],
  owners: false,
  category: "imagen",
  desc: "Muestra la foto de perfil que tiene tal usuario",
  usage: "<prefix>avatar || <prefix>avatar <mentioned>",
  execute: async (client, message, args) => {
	  let usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let embed = new (require("discord.js")).MessageEmbed()
.setAuthor("Avatar del usuario "+usuario.user.tag, usuario.user.avatarURL())
.setDescription(`[png](${usuario.user.avatarURL({dynamic: true, format: "png", size: 2048})}) **|** [jpg](${usuario.user.avatarURL({dynamic: true, format: "jpg", size: 2048})}) **|** [jpeg](${usuario.user.avatarURL({dynamic: true, format: "jpeg", size: 2048})}) **|** [webp](${usuario.user.avatarURL({dynamic: true, format: "webp", size: 2048})}) **|** [gif](${usuario.user.avatarURL({dynamic: true, format: "gif", size: 2048})})`)
.setColor(client.color)
.setImage(usuario.user.avatarURL({dynamic: true, size: 2048}))
message.channel.send(embed)
}
}