const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ('megadb')
const canalsgr = new db.crearDB('canalsugerencias')



module.exports = {
  name: "canalsgr", 
  alias: ["cs"],

execute (client, message, args){


const canal = message.mentions.channels.first()
if(!canal) return message.channel.send("<a:no:871913506167980052>Debes mencionar un canal!")


message.channel.send(`<a:si:871913544206123079>Todo ha salido bien! Las sugerencias seran enviadas a **${canal}**`)


canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)

 }

} 

