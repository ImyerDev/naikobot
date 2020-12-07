let Discord = require("discord.js")
/*
Tengo todo esto
Facil, solamente obtengo la clase xd
Sabes me da risa que uses class y todo eso xdddd, enfin y como se supone que haces el "get" en lo del lenguage?
Bueno a ver hacemos todos los comandos dea
si funciona yo te digo
Primero debemos probar?si 
we
Vente a MyBOT Team
*/
class Language{
	constructor(client) {
	this.language = {
		es: {
                commands: {
                EVAL: {
                ARGS: (emoji) => `${emoji} | Debes de poner algo para evaluar`,
                CORRECT: (emoji) => `${emoji} | Evaluado correctamente!`,
                INPUT: `Entrada:`,
                OUTPUT: `Salida:`,
                TYPE: `Tipo:`
		},
                RELOAD: {
                ARGS: (emoji) => `${emoji} | Debes de poner un comando a reiniciar`,
                INCORRECT: (emoji, command) => `${emoji} | El comando \`${command}\` no existe`,
                CORRECT: (emoji, command, category) => `${emoji} | El comando \`${command}\` de la categoria \`${category}\` a sido reiniciado`,
                ERROR: (emoji) => `${emoji} | Hubo un error, intentalo de nuevo mas tarde`,
                },
                },
		en: {
                EVAL: {
                ARGS: (emoji) => `${emoji} | You must put something to evaluate`,
                CORRECT: (emoji) => `${emoji} | Evaluated succesfully!`,
                INPUT: `Input:`,
                OUTPUT: `Output:`,
                TYPE: `Type:`
		},
                RELOAD: {
                ARGS: (emoji) => `${emoji} | You must put a command to reload`,
                INCORRECT: (emoji, command) => `${emoji} | The command \`${command}\` does not exist`,
                CORRECT: (emoji, command, category) => `${emoji} | The command \`${command}\` of the category \`${category}\` has been restarted`,
                },
                ERROR: (emoji) => `${emoji} | There was an error, please try again later`,
                
		},
                }
	    }
	}
    }
module.exports = Language