const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ("megadb")
const muterol = new db.crearDB("muterol")


module.exports = {
  name: "muterol", 
  alias: ["mrol"],

execute (client, message, args){



  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos para ejecutar el comando")

  let rol = message.mentions.roles.first();
  if(!rol) return message.channel.send("<a:no:871913506167980052>Debes mencionar un rol!")

  muterol.establecer(message.guild.id, rol.id)

  message.channel.send(`<a:verified:871913650653364235>Se ha establecido el rol **${rol.name}** como rol para mutear`)

  

 }

} 