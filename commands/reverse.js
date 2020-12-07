module.exports = {
    name: "reverse",
    aliases: ["reversa"],
    category: "utilidad",
    owners: false,
    desc: "Resetea la economia del servidor donde lo ejecutaste",
    usage: "<prefix>reset-economy <number>",
	execute: async(client, message, args) =>{
		if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el texto que quieras para ponerlo en reversa")
		message.channel.send(args.join(" ").split("").reverse().join(""), {allowedMentions: {parse: []}})
	}
}