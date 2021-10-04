const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const neko = new Neko()

module.exports = {
  name: "nneko", 
  alias: [],

async execute (client, message, args){

  if(!message.channel.nsfw) return message.channel.send(`🔞**${message.author.username}**, este canal no es **NSFW**`)

  async function work() {
    let owo = (await neko.nsfw.nekoGif());

  const load = new Discord.MessageEmbed()
    .setTitle(`<a:loading:871913621284855818> Loading`)
    .setColor("0xFF4200")

  const embed = new Discord.MessageEmbed()
    .setTitle("💖Neko kya~")
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