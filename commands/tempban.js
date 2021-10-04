const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "tempban", 
  alias: [],

async execute (client, message, args){

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:no:871913506167980052>No tienes permisos!`)
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:no:871913506167980052>Necesito el permiso **BAN_MEMBERS**`)

  const member = message.mentions.members.first()
  if(!member) return message.channel.send(`<a:no:871913506167980052>Deber mencionar a un usuario`)

  let time = args[1]
  if(!time) return message.channel.send(`<a:no:871913506167980052>Debes decir el tiempo`)
  let timer = ms(time)

  const embedb = new Discord.MessageEmbed()
    .setTitle(`Usuario tempbaned`)
    .addField(`Usuario`, `» ${member.username}`)
    .addField(`Moderador`, `» ${message.author}`)
    .addField(`time`, `» ${time}`)
    .setColor("0xFF4200")

  member.send(embedb)
  message.channel.send(embedb)

  await member.ban({reason: `Usuario tempban por ${message.author.tag} durante ${time}`})
  await setTimeout(async function () {
    await message.guild.members.unban(member.id)

    message.channel.send(`<a:si:871913544206123079>El usuario ${member.username} fue desbaneado`)

  }, timer)

 }

} 