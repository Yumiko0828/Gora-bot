const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "servers", 
  alias: [],

execute (client, message, args){

  if(message.author.id !== "752918867273187378") return message.channel.send("<a:no:871913506167980052>Solamente mi creador puedo usar este comando!")

  const embed = new Discord.MessageEmbed()

  .setTitle(`Estoy en: ${client.guilds.cache.size} servidores `)
  .setDescription(`Los nombres son: ${client.guilds.cache.map(a => a.name)}`)
  .setColor("0xE24C3F")

message.channel.send("<a:verified:871913650653364235>Revisa tus mensajes privados!")
  message.author.send(embed)

  

 }

} 