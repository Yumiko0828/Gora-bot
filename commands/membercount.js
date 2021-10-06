const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "membercount", 
  alias: ["mc"],

execute (client, message, args){



const embed = new Discord.MessageEmbed()

.setTitle("Members")
.setThumbnail(message.guild.iconURL())
.setAuthor(message.guild.name, message.guild.iconURL())
.setColor("0xE24C3F")
.addField("**Total users**:", message.guild.memberCount, true)


message.channel.send(embed)

}

} 