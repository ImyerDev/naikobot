class PrefixManager{
constructor() {
	this.prefix = async function Prefix(client, guildid){
	 let x = await client.prefixes.findOne({guildID: guildid});
	 if(x) {
	 return x.prefix
	 }
	 if(x == null) {
     return '-'
	 }
	}
	this.updatePrefix = async function UpdatePrefix(message, client, guildid, newprefix) {
	let x = await client.prefixes.findOne({guildID: guildid})
        if(x == null) {
        return await client.prefixes.create({
	guildID: guildid,
        addedBy: message.author.id,
	updateBy: message.author.id,
	prefixAdded: Date.now(),
	prefix: newprefix
	})
        }
        await client.prefixes.deleteMany({guildID: guildid}, {prefix: newprefix})
        return newprefix
        }
	this.hasPrefix = async function RealPrefix(client, guildid) {
	 let x = await client.prefixes.findOne({guildID: guildid})
	 if(x) return true
	 if(!x) return false
	}
}
}

module.exports = PrefixManager