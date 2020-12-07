module.exports = {
	name: "joke",
	aliases: ["chiste"],
	category: "diversion",
	owners: false,
	desc: "Chiste random con la API de Naiko",
	usage: "<prefix>joke",
	execute: async(client, message, args) =>{
		const fetch = require("node-superfetch")
fetch.get("http://risapi.glitch.me").then(b => {
message.channel.send(b.body.chiste)
})
	}
	}