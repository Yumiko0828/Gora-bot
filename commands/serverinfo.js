const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "serverinfo", 
  alias: ["sinfo"],

execute (client, message, args){

const embed = new Discord.MessageEmbed()

.setTitle("📢Informacion de el servidor")
.setThumbnail(message.guild.iconURL())
.setAuthor(message.guild.name, message.guild.iconURL())
.setColor("0xFF4200")
.addField("🆔ID:", message.guild.id)
.addField("✨Dia de creación", message.guild.joinedAt)
.addField("🗺Region", message.guild.region)
.addField("👑Dueño(a)", message.guild.owner)
.addField("👤Miembros:", message.guild.memberCount, true)
.addField("🤖Bots:", message.guild.members.cache.filter(m => m.user.bot).size)
.addField("🙃Emojis", message.guild.emojis.cache.size)
.addField("⚜Boost:", message.guild.premiumSubscriptionCount.toString())
.addField("✅Nivel de verificación:", message.guild.verificationLevel)
.addField("🏹Roles:", message.guild.roles.cache.size, true)

message.channel.send(embed)
  

 }

} 