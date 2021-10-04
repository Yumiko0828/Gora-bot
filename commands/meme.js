const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const spanishmemes = require('spanish.memes');
const meme = spanishmemes.Meme()

module.exports = {
  name: "meme", 
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
    .setImage(meme)
    .setColor("0xFF4200")
  
  message.channel.send(embed)

 }

} 