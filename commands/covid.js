module.exports = {
	name: "covid",
	aliases: [],
	category: "informacion",
	owners: false,
	desc: "Obtiene las estadisticas de tal pais, o si no las estadisticas totales del coronavirus",
    usage: "<prefix>covid || <prefix>covid <country>",
    execute: async(client, message, args) =>{
    let { MessageEmbed } = require("discord.js")
    let res = await require('node-fetch')(`https://corona.lmao.ninja/v3/covid-19/all?yesterday=false`);
    let data = await res.json()
    let emojis = {
    approve: require("../utils/emojis/approve.js"),
    deny: require("../utils/emojis/deny.js"),
    covid: require("../utils/emojis/coronavirus.js")
    }
    let obtenerPrefix = new (require("megadb")).crearDB("prefixes")
    let prefix = await obtenerPrefix.tiene(message.guild.id) ? await obtenerPrefix.obtener(message.guild.id) : "-"
  let pais = args[0]
  let res_country = await require('node-fetch')(`https://corona.lmao.ninja/v3/covid-19/countries?yesterday=false`)
  let data2 = await res_country.json()
  let data_country = data2.find(q => q.country == pais)
  let embed2 = new MessageEmbed()
  .setColor(client.color)
  .setDescription(`**:wrench: | Recuerda:**\nPara poder obtener tal estadistica de tal pais usa: \`${prefix}covid <country>\``)
  .addField(`${emojis.covid} | Casos:`, (data.cases).toLocaleString())
  .addField(`${emojis.covid} | Casos de hoy:`, (data.todayCases).toLocaleString())
  .addField(`${emojis.covid} | Muertes:`, (data.deaths).toLocaleString())
  .addField(`${emojis.covid} | Muertes hoy:`, (data.todayDeaths).toLocaleString())
  .addField(`${emojis.covid} | Recuperados:`, (data.recovered).toLocaleString())
  .addField(`${emojis.covid} | Recuperados hoy:`, (data.todayRecovered).toLocaleString())
  .addField(`${emojis.covid} | Testeos:`, (data.tests).toLocaleString())
  .addField(`${emojis.covid} | Paises afectados:`, (data.affectedCountries).toLocaleString())
  if(!pais) {
    return message.channel.send(embed2)
  }else{
  if(!await data_country) return message.channel.send(`${emojis.deny} | No e encontrado ese pais en constancias del virus`)
  let covid_country = await data_country
  let embed = new MessageEmbed()
    embed.setColor(client.color)
    embed.setThumbnail(covid_country.countryInfo.flag)
    embed.addField(`${emojis.covid} | Continente:`, covid_country.continent)
    embed.addField(`${emojis.covid} | Casos:`, (covid_country.cases).toLocaleString())
    embed.addField(`${emojis.covid} | Casos de hoy:`, (covid_country.todayCases).toLocaleString())
    embed.addField(`${emojis.covid} | Muertes:`, (covid_country.deaths).toLocaleString())
    embed.addField(`${emojis.covid} | Muertes hoy:`, (covid_country.todayDeaths).toLocaleString())
    embed.addField(`${emojis.covid} | Recuperados:`, (covid_country.recovered).toLocaleString())
    embed.addField(`${emojis.covid} | Recuperados hoy:`, (covid_country.todayRecovered).toLocaleString())
    embed.addField(`${emojis.covid} | Testeos:`, (covid_country.tests).toLocaleString())
    message.channel.send(embed)
  }
}
}