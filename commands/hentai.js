const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const neko = new Neko()

module.exports = {
  name: "hentai", 
  alias: [],

async execute (client, message, args){

  if(!message.channel.nsfw) return message.channel.send(`🔞**${message.author.username}**, este canal no es **NSFW**`)

  async function work() {
    let owo = (await neko.nsfw.randomHentaiGif());

  const load = new Discord.MessageEmbed()
    .setTitle(`<a:loading:871913621284855818> Loading`)
    .setColor("0xE24C3F")

  const embed = new Discord.MessageEmbed()
    .setTitle("🔥Hentai")
    .setImage(owo.url)
    .setColor("RANDOM")
    .setTimestamp()
    .setURL(owo.url);
  
  message.channel.send(load).then(async msg => {
    msg.edit(embed)
  });
 }

work();
}
   } ;