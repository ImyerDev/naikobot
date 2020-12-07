//Naiko Page
const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-discord");
const body = require("body-parser");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

let scope = ["identify", "guilds", "guilds.join"];

passport.use(
  new Strategy(
    {
      clientID: process.env.ID,
      clientSecret: process.env.SECRET,
      callbackURL: `https://naikobot.imyer.repl.co/login`,
      scope: scope
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile);
      });
    }
  )
);

app
  .use(body.json())
  .use(body.urlencoded({ extended: true }))
  .engine("html", require("ejs").renderFile)
  .use(express.static(path.join(__dirname, "/public")))
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "utils"))
  .use(
    session({
      secret: "naiko",
      resave: false,
      saveUnitialized: false
    })
  )
  .use(passport.initialize())
  .use(passport.session())
/*.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})
.get("/", (req, res) => {
  res.sendStatus(200);
})*/
.use(express.static("public"))
.use("/", require("./utils/router"))
.listen(5822);
setInterval(() => {
  http.get(`http://naikobot.imyer.repl.co`);
}, 280000);

let Discord = require("discord.js")
let DisTube = require("distube")
//Structures
let { Structures } = require("discord.js")
let { prefix , hasPrefix , updatePrefix} = new (require("./utils/functions/prefix.js"))
let { use } = new (require("./utils/functions/cmds.js"))
//Guild structure
Structures.extend("Guild", Guild =>{
class DiscordGuild extends Guild{
 constructor(client, data) {
 super(client, data);
 this.prefix = {
 current: prefix(client, this.id),
 change: async(message, newprefix) =>{ 
 if(!newprefix) return 'puto';
 return updatePrefix(message, client, this.id, newprefix)},
 has: hasPrefix(client, this.id) ? true : false
 }
 this.commands = {
        "add": async(array) => use("add", this.id, null, array),
        "delete": async(array) => use("delete", this.id, null, array),
        "list": async(eod) => use("list", eod ? eod : null, this.id)
        }
 this.options = {
 prefix: hasPrefix(client, this.id) ? true : false,
 commandsConfig: use("has", this.id) ? true : false
 }
 }
}
return DiscordGuild
})
//User structure
Structures.extend("User", (User) =>{
class DiscordUser extends User{
constructor(client, data) {
 super(client, data);
 this.options = {
developer: client.devs.includes(data.id) ? true : false,
cool: true
}
}
}
return DiscordUser
})
//GuildMember structure
Structures.extend("GuildMember", (GuildMember) =>{
return class extends GuildMember{
constructor(client, data, guild) {
super(client, data, guild);
this.options = {
developer: client.devs.includes(data.id) ? true : false,
cool: true
}
}
 hasPermission(permission, { checkAdmin = true, checkOwner = true } = {}) {
 if(checkOwner && this.user.id === this.guild.ownerID) return true;
 if(permission == "NAIKO_DEVELOPER") return client.devs.includes(this.user.id) ? true : false 
 return this.roles.cache.some(r => r.permissions.has(permission, checkAdmin));
 }
}
})
//Message structure
Structures.extend("Message", (Message) =>{
class DiscordMessage extends Message{
constructor(client, data, channel) {
super(client, data, channel);
this.server = this.guild
}
}
return DiscordMessage
})
let BaseClient = require("./utils/structures/Client.js")
let client = new BaseClient()
let { ShardingManager } = require('discord.js');
let Distube = require("distube")
let distube = new Distube(client, { searchSongs: true, emitNewSongOnly: true })
let db = require("megadb")
let fs = require("fs")
//Connecting to database
let mongoose = require("./utils/mongoose.js")
//Functions
client.queue = new Discord.Collection()
client.levels = require("./utils/models/levels.js")
client.gender = require("./utils/models/gender.js")
client.prefixes = require("./utils/models/prefixes.js")
client.blacklist = require("./utils/models/blacklist.js")
client.distube = distube
client.logs = require("./utils/models/logs.js")
client.color = "F4F4F4"
client.devs = [
	"450291712703856650", //0
	"534951970310586378", //8
        "717803526679560233" //3
]
client.musicUse = [
"450291712703856650",
"507367752391196682",
]
client.cooldowns = new Discord.Collection()
client.snipes = new Map()
client.cooldown = new Discord.Collection()
client.comandos = new Discord.Collection()
client.eventos = new Discord.Collection()
client.editsnipes = new Map()
//Distube Test
//Events
client.distube
    .on("playSong", (message, queue, song) => {
        const embed = new Discord.MessageEmbed()
    .setDescription("Escuchando cancion")
    .addField("Nombre:", song.name)
    .addField("Duracion:", song.formattedDuration)
    .addField("Agregada por:", song.user)
    .setColor(client.color)
    message.channel.send(embed)
    })
    .on("addSong", (message, queue, song) => {
    const embed = new Discord.MessageEmbed()
    .setDescription("Cancion agregada")
    .addField("Nombre:", song.name)
    .addField("Duracion:", song.formattedDuration)
    .addField("Agregada por:", song.user)
    .setColor(client.color)
    message.channel.send(embed)
    })
    .on("playList", (message, queue, playlist, song) => {
    const embed = new Discord.MessageEmbed()
    .setDescription("Escuchando playlist")
    .addField("Playlist:", playlist.name)
    .addField("Nombre:", song.name)
    .addField("Duracion:", song.formattedDuration)
    .addField("Agregada por:", song.user)
    .setColor(client.color)
    message.channel.send(embed)
    })
    .on("addList", (message, queue, playlist) => {
    const embed = new Discord.MessageEmbed()
    .setDescription("Playlist agregada")
    .addField("Playlist:", playlist.name)
    .addField("Cantidad:", playlist.songs.length)
    .setColor(client.color)
    message.channel.send(embed)
    })
    .on('initQueue',queue =>{
      console.log('AVER')
    })
    .on('error', (message, err)=>{
      console.log(err)
    })
//Handlers
//Commands
for(let cmdName of fs.readdirSync("./commands").filter((k) => k.endsWith(".js"))) {
let comando = require("./commands/"+cmdName)
client.comandos.set(comando.name, comando)
}
//Events
for(let evntName of fs.readdirSync("./events").filter((k) => k.endsWith(".js"))) {
let evento = require("./events/"+evntName)
client.on(evntName.replace(".js", ""), evento.bind(null, client))
client.eventos.set(evntName.replace(".js", ""), evento)
}
client.login(process.env.TOKEN)