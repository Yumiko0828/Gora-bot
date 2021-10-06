const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const neko = new Neko()

module.exports = {
  name: "baka", 
  alias: [],

async execute (client, message, args){

  async function work() {
    let owo = (await neko.sfw.baka());

  const load = new Discord.MessageEmbed()
    .setTitle(`<a:loading:871913621284855818> Loading`)
    .setColor("0xE24C3F")

  const embed = new Discord.MessageEmbed()
    .setTitle("🤬Baka")
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