const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "botstats", 
  alias: ["bs"],

execute (client, message, args){

  if(message.author.id !== "752918867273187378") return message.channel.send("<a:no:871913506167980052>Solamente mi creador puedo usar este comando!")

  const embed = new Discord.MessageEmbed()
    .setAuthor("GoraBot✨", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField("Desarrollador", `» Yumiko0828#5285`)
    .addField("Servidores", `» ${client.guilds.cache.size}`)
    .addField("Usuarios", `» ${client.users.cache.size}`)
    .addField("Ram", `» ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("Lenguaje", "» JavaScript")
    .addField("Libreria", "» Discord.js v12.5.3")
    .setColor("0xFF4200")
  
  message.channel.send(embed)

 }

} 