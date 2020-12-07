class Commands{
        constructor(svData, usData) {
         this.cmds = {
         sv: {
         name: svData.name,
         authentification: svData.id,
         users: svData.members.cache.size,
         nac: svData.verificationLevel == "NONE" ? false : true,
         }
         }
        }
}

module.exports = Commands