const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos!")

  const cantidad = args.join(" ");

  if(!cantidad) return message.channel.send("<a:no:871913506167980052>Debes decir una cantidad!")

  if(cantidad === '0') return message.channel.send("<a:no:871913506167980052>Debes decir un numero mayor que **0**")
  
  message.delete()

  message.channel.bulkDelete(cantidad).then(() => {
    message.channel.send(`<a:verified:871913650653364235> **${cantidad}** mensajes eliminados correctamente 🧹`)
  })

  

 }

} 