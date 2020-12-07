const { Client } = require("discord.js");

class NaikoClient extends Client {
	constructor(options = {intents: 32767 }) {
        super(options);
    }
}
module.exports = NaikoClient
