const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const neko = new Neko()

module.exports = {
  name: "wallpaper", 
  alias: [],

async execute (client, message, args){

  async function work() {
    let owo = (await neko.sfw.wallpaper());
  
  const load = new Discord.MessageEmbed()
    .setTitle(`<a:loading:871913621284855818> Loading`)
    .setColor("0xFF4200")
  
  const embed = new Discord.MessageEmbed()

  .setTitle("<a:verify:871913674586091610>Wallpaper generado")
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