const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick", 
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos!")

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("<a:no:871913506167980052>Debes mencionar a un usuario!")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)
   return message.channel.send("<a:no:871913506167980052>No puedes banear a una persona con tu mismo rol o superior!")

   if(user === message.author) return message.channel.send("<a:no:871913506167980052>No puedes kickearte a ti mismo!")

   var razon = args.slice(1).join(' ')
   if(!razon){
     razon = '<a:loading:871913621284855818>No especificada'
   }

   message.guild.member(user).kick(razon);

   const embedfinal = new Discord.MessageEmbed()

   .setTitle("Usuario kickeado")
   .addField(`User`, `» ${user}`)
   .addField(`Razon`, `» ${razon}`)
   .addField(`Moderador`, `» ${message.author}`)
   .setColor("0xE24C3F")
   .setTimestamp()
   .setFooter(`ID: ${user.id}`)

   user.send(embedfinal)
   message.channel.send(embedfinal)

 }

} 