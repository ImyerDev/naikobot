module.exports = {
  name: 'calc',
  aliases: ["calcular"],
  category: 'utilidad',
  owners: false,
  desc: 'No tiene',
  usage: '<prefix>calc <calc>',
  execute: async(client, message, args) =>{
  let math = require("math-expression-evaluator")
  if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes de poner algo a calcular")
  let embed = new (require("discord.js")).MessageEmbed()
  .setColor(client.color)
  try {
  embed.setDescription("📊 | Calculadora")
  embed.addField("Calculo:", "```js\n"+args.join(" ")+"```")
  embed.addField("Resultado:", "```js\n"+math.eval(args.join(" "))+"```")
  } catch(e) {
  embed.setDescription("📊 | Calculadora")
  embed.addField("Resultado:", "```js\nError: no pude calcular los numeros```")
  }
  message.channel.send(embed)
  }
}