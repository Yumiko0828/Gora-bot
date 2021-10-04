const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [],

execute (client, message, args){

   var perms = message.member.hasPermission("BAN_MEMBERS")
   if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos!")

   let user = message.mentions.members.first()
   if(!user) return message.channel.send("<a:no:871913506167980052>Debes mencionar a un usuario!")

   let banReason = args.slice(1).join(' ')
   if(!banReason) return message.channel.send("<a:no:871913506167980052>Debes decir una razon!")

   if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)
   return message.channel.send("<a:no:871913506167980052>No puedes banear a una persona con tu mismo rol o superior!")

   if(user === message.author) return message.channel.send("<a:no:871913506167980052>No puedes banearte a ti mismo!")

   user.ban({ reason: banReason})

   const embed = new Discord.MessageEmbed()

   .setTitle("Usuario baned")
   .addField(`Usuario`, `» ${user}`)
   .addField(`Razón`, `» ${banReason}`)
   .addField(`Moderador`, `» ${message.author}`)
   .setColor("0xFF4200")
   .setTimestamp()
   .setFooter(`ID: ${user.id}`)

   user.send(embed)
   message.channel.send(embed)

 }

} 