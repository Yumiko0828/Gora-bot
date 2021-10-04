const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const neko = new Neko()

module.exports = {
  name: "kiss", 
  alias: [],

async execute (client, message, args){

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("<a:no:871913506167980052>Debes mencionar a un usuario!")

  async function work() {
    let owo = (await neko.sfw.kiss());

  const load = new Discord.MessageEmbed()
    .setTitle(`<a:loading:871913621284855818> Loading`)
    .setColor("0xFF4200")

  const embed = new Discord.MessageEmbed()
    .setDescription(`💋**${message.author.username}** le dio un beso a **${user}** :3`)
    .setImage(owo.url)
    .setColor("RANDOM")
    .setTimestamp()
  
  message.channel.send(load).then(async msg => {
    msg.edit(embed)
  });
 }

work();
}
   } ; 