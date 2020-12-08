class PrefixManager{
constructor() {
	this.currentPrefix = async function Prefix(client, guildid){
	 let x = await client.prefixes.findOne({guildID: guildid});
	 if(x) {
	 return x.prefix
	 }
	 if(x == null) {
     return '-'
	 }
	}
	this.deletePrefix = async function UpdatePrefix(client, guildid) {
	let x = await client.prefixes.findOne({guildID: guildid})
        if(x == null) {
        await client.prefixes.deleteMany({guildID: guildid})
        }
        return true
        }
	this.setPrefix = async function RealPrefix(client, guildid, newprefix) {
	 let x = await client.prefixes.findOne({guildID: guildid})
	 if(x == null) {
         const nuller = new client.prefixes({
         guildID: guildid,
         prefix: newprefix
         })
         nuller.save();
         } else {
         await client.prefixes.deleteMany({guildID: guildid});
         const New = new client.prefixes({
         guildID: guildid,
         prefix: newprefix
         })
         New.save();
         }
        }
}
}

module.exports = PrefixManager
