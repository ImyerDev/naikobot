module.exports = async(client) =>{
      console.log(`Im loaded!`);
  setInterval(function(){
    let actividades = [
  `-help`
]
    client.user.setPresence({
      status: "online",
      activity: {
        type: "PLAYING",
        name: actividades[Math.floor(Math.random() * actividades.length)]
      }
    })
}, 12000)
  }