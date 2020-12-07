function hora() {
 let fecha = new Date(),
 hora2 = fecha.getHours(),
 minutos = fecha.getMinutes()
 
 if(hora2 < 10) {
 hora = `0${hora}`
 }
 if(minutos < 10) {
 minutos = `0${minutos}`
}

 return `${hora2}:${minutos}`
}
class Chat{
constructor() {
this.hour = function asd() { 
return hora()
}
this.chat = {
        en: {
        KILL: (user1, user2) => `[SABER] ${user1} player killed by ${user2}.`,
        ANNOUNCE: (announce) => `[SABER] ${announce}.`,
        ANTIBUG: (user, bug) => `[SABER] ${user} player is bugging ${bug}.`,
        BAN: (server, mod, user, reason) => `[${server}] ${user} player banned by ${mod} with reason ${reason}.`,
        KICK: (mod, user, reason) => `[SABER] ${user} player kicked by ${mod} with reason ${reason}.`,
        NOMESSAGES: `[SABER] No messages in the chat.`,
        MESSAGE: (msg, user) => `[SABER] ${user}: ${msg}`,
        CORRECT: (emoji) => `${emoji} | Text sent succesfully!`,
        BAN_CORRECT: (emoji) => `${emoji} | Banned succesfully!`,
        LENGTH: (emoji) => `${emoji} | You cannot send a text of more than 75 characters.`,
        BANNED: (emoji) => `${emoji} | You have been banned, you cannot send messages via chat.`,
        BANNED2: (emoji, user) => `${emoji} | The ${user} player is banned.`
},
        es: {
        KILL: (server, user1, user2) => `# [${this.hour()}] [${server}] El jugador ${user1} ha muerto por ${user2}.`,
        ANNOUNCE: (server, announce) => `# [${this.hour()}] [${hora}] [${server}] ${announce}.`,
        ANTIBUG: (server, user, bug) => `# [${this.hour()}] [${server}] El jugador ${user} esta bugueando ${bug}.`,
        BAN: (server, mod, user, reason) => `# [${this.hour()}] [${server}] El jugador ${user} fue baneado por ${mod} con la razon ${reason}.`,
        KICK: (server, mod, user, reason) => `# [${this.hour()}] [${server}] El jugador ${user} fue kickeado por ${mod} con la razon ${reason}.`,
        NOMESSAGES: `# [${this.hour()}] No hay mensajes en el chat.`,
        MESSAGE: (server, msg, user) => `# [${this.hour()}] [${server}] ${user}: ${msg}`,
        CORRECT: (emoji) => `${emoji} | Texto enviado correctamente!`,
        BAN_CORRECT: (emoji) => `${emoji} | Baneado correctamente!`,
        LENGTH: (emoji) => `${emoji} | No puedes enviar un texto de mas de 75 caracteres.`,
        BANNED: (emoji) => `${emoji} | Has sido baneado, no puedes enviar mensajes por el chat.`,
        BANNED2: (emoji, user) => `${emoji} | El jugador ${user} esta baneado.`
}
}
}
}

module.exports = Chat