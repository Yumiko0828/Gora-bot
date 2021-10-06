const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const meme = require('discord-memes');

module.exports = {
  name: "meme", 
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
    .setImage(meme.imagenesEspañol())
    .setColor("0xE24C3F")
  
  message.channel.send(embed)

 }

} 