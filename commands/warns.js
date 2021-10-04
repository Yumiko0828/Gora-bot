const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ("megadb")
const warns = new db.crearDB("warns")


module.exports = {
  name: "warns", 
  alias: [], 

async execute (client, message, args){



  var perms = message.member.hasPermission("KICK_MEMBER")
  if(!perms) return message.channel.send ("<a:no:871913506167980052>No tienes permisos!")

let persona = message.mentions.users.first()

let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
const embed1 = new Discord.MessageEmbed()
  .setTitle(`<a:si:871913544206123079>Esa persona no tiene warns!`)
  .setColor("0xFF4200")

  message.channel.send(embed1)

return;

}

const embed2 = new Discord.MessageEmbed()
  .setTitle(`Advertencias de ${persona.tag}`)
  .addField(`User:`, `» ${persona}`)
  .addField(`Warns:`, `» ${cantidad}`)
  .setColor("0xFF4200")

message.channel.send(embed2)
  

 }

} 