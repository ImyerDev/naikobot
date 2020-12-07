module.exports = {
    name: "withrole",
    aliases: ["conrole", "conrol", "withrol"],
    category: "informacion",
    owners: false,
    desc: "Puedes saber el numero de personas que tienen x role",
    usage: "<prefix>withrole <role_name>",
	execute: async(client, message, args) =>{
		if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el nombre de un role")
let filtro = message.guild.roles.cache.find(q => q.name == args.join(" "))
let list = []
if(!filtro) return message.channel.send("<a:deny:718249526217015338> | Ese role no existe")
if(filtro.members.size < 1) return message.channel.send("<a:deny:718249526217015338> | No encontre a nadie con ese role")
let i = 0
for(let users of filtro.members.map(q => q.user.tag)) {
i++
list.push(`${i}# ${users}`)
}
let txt = ""+list.join("\n")
let embed = new (require("discord.js")).MessageEmbed()
.addField(":blue_book: | Encontre a "+filtro.members.size+" usuarios con el rol "+filtro.name+"", "```js\n"+txt.slice(0, 985)+"\n```")
.setColor(client.color)
message.channel.send(embed)
	}
}