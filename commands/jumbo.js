const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "jumbo", 
  alias: [],

execute (client, message, args){

  if(!args[0]) return message.channel.send("<a:no:871913506167980052>Debes mencionar un emoji.")

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("<a:no:871913506167980052>Ese no es un emoji valido.")

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setImage(emoji.url)
    .setColor("0xE24C3F")

  message.channel.send(embed)

  message.delete()

 }

} 