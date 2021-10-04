const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "invite", 
  alias: [],

execute (client, message, args){

  

  const embed = new Discord.MessageEmbed()

  .setTitle("Invitacion")
  .setColor("0xFF4200")
  .setThumbnail(message.guild.iconURL())
  .addField("<a:booster:876883993293910026>Invitame", "[invite.gg/Gora✨](https://discord.com/oauth2/authorize?client_id=871905999320150036&scope=bot&permissions=470355039)")
  .setFooter("Gora creado por Dalmata_756#5285")

  message.author.send(embed)

  message.channel.send("<a:verified:871913650653364235>Revisa tus mensajes privados")

  

 }

} 