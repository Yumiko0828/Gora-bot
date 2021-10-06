const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ('megadb')
const warns = new db.crearDB('warns')


module.exports = {
  name: "unwarn", 
  alias: [],

async execute (client, message, args){

 
  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos para ejecutar ese comando!")
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:no:871913506167980052>Necesito el permiso **BAN_MEMBERS**")

  const user = message.mentions.members.first()
  if(!user) return message.channel.send("<a:no:871913506167980052>Debes mencionar a alguien!")

  if(!warns.tiene(`${message.guild.id}.${user.id}`)){
    warns.establecer(`${message.guild.id}.${user.id}`, 0)

    const embed1 = new Discord.MessageEmbed()
      .setTitle(`<a:si:871913544206123079>Esta persona no tiene warns!`)
      .setColor("0xE24C3F")

    message.channel.send(embed1)
  }

  const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

  if(cantidad < 1) return message.channel.send(embed1)

  warns.restar(`${message.guild.id}.${user.id}`, 1)

const embedfinal = new Discord.MessageEmbed()
  .setTitle(`Advertencia removida`)
  .addField(`Moderador:`, `» ${message.author.username}`)
  .addField(`User`, `» ${user}`)
  .addField(`Warns quitadas`, `» 1 warn`)
  .setColor("0xE24C3F")

  message.channel.send(embedfinal)
  

 }

} 