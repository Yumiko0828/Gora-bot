const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: ["av"],

execute (client, message, args){


  let user = message.mentions.members.first() || message.member;

  const avatar = new Discord.MessageEmbed()

    .setTitle(`<a:verified:871913650653364235>Avatar de: ${user.user.username}`)
    .setDescription(`[📎Descargar avatar](${user.user.displayAvatarURL({
    dynamic: true,
    size: 1024
  })})`)
    .setColor("0xFF4200")
    .setImage(user.user.displayAvatarURL({ dynamic: true, size: 1024}))
    .setFooter(`📩Avatar solicitado por ${message.author.username}`)

    message.channel.send(avatar)


 }

} 