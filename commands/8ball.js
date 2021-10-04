const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball", 
  alias: [],

execute (client, message, args){

  let mensaje = args.slice().join(" ")
if (!mensaje) return message.channel.send("<a:no:871913506167980052>Debes decirme una pregunta!")

let respuestas = ["En mi opinion, si","Es cierto","Es decididamente asi","Probablemente","Buen pronostico","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Debes confiar en ello","Respuesta vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso","En mi opinion, si", "No se", "Creo que ya sabes la respuesta", "quizas", "puede ser pa", "Todo apunta a que si", "sin duda alguna", "Definitivamente si", "Definitivamente no", "Lo dudas?", "Claro", "No se que decirte", "Pregunta de nuevo mi cerebro esta fallando XD", "No cuentes con eso", "Estoy seguro que no", "Obviamente no", "las dos clases", "obviamente"]

const bal = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} me esta preguntando...?`, message.author.displayAvatarURL())
  .addField(`Pregunta:`, `» **${mensaje}**`)
  .addField(`Respuesta:`, `» **${respuestas[( Math.floor(Math.random() * respuestas.length))]}**`)
  .setFooter(`8Ball`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
  .setColor("0xFF4200")
  .setTimestamp()

message.channel.send(bal)
  

 }

} 