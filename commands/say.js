const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say", 
  alias: [],

execute (client, message, args){

  message.delete()

  let txt = args.slice(0).join(' ')
  if(!txt) return message.channel.send('<a:no:871913506167980052>Tienes que poner un mensaje')
  
  message.channel.send(txt)

 }

} 