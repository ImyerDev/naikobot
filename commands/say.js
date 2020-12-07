module.exports = {
	name: "say",
	aliases: [],
	category: "diversion",
	owners: false,
	desc: "Envia un texto",
	usage: "<prefix>say <text>",
	execute: async(client, message, args) =>{
	if(!args.join(" ")) return message.channel.send("<a:deny:718249526217015338> | Debes de poner el texto del embed")
	message.channel.send(args.join(" "), {allowedMentions: {parse: []}})
	}
}