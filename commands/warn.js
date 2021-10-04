const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ("megadb")
const warns = new db.crearDB ("warns")


module.exports = {
  name: "warn", 
  alias: [],

execute (client, message, args){


  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send ("<a:no:871913506167980052>No tienes permisos para ejecutar el siguiente comando!")

  let persona = message.mentions.users.first()
  if(!persona) return message.channel.send("<a:no:871913506167980052>Debes mencionar a un usuario para ejecutar el siguiente comando")

  var razon = args.slice(1).join(" ")
  if(!razon){
    razon= "<a:loading:871913621284855818>No especificado"
  }

  if(!warns.tiene(`${message.guild.id}.${persona.id}`))
  warns.establecer(`${message.guild.id}.${persona.id}`,0)

  warns.sumar(`${message.guild.id}.${persona.id}`, 1)

const warn = new Discord.MessageEmbed()
  .setTitle(`User warneado`)
  .addField(`User:`, `» ${persona}`)
  .addField(`Razon:`, `» **${razon}**`)
  .addField(`Moderador`, `» ${message.author}`)
  .setColor("0xFF4200")
  .setTimestamp()
  .setFooter("Evitar hacerlo de nuevo!", message.author.displayAvatarURL())

message.channel.send(warn)

const warneado = new Discord.MessageEmbed()
  .setTitle(`${persona.tag} has sido WARNEADO`)
  .addField(`Warneado en el servidor:`, `» **${message.guild}**`)
  .addField(`Razon:`, `» **${razon}**`)
  .addField(`Moderador`, `» ${message.author}`)
  .setColor("0xFF4200")
  .setTimestamp()
  .setFooter("Evitar hacerlo de nuevo!", message.author.displayAvatarURL())

persona.send(warneado)


 }

} 