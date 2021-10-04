const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "unban", 
  alias: [],

async execute (client, message, args){

 

var perms = message.member.hasPermission("BAN_MEMBERS")
if(!perms) return message.channel.send("<a:no:871913506167980052>No tienes permisos para ejecutar este comando!")

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:no:871913506167980052>No tengo suficientes permisos!")

let userID = args[0];
if(!userID) return message.channel.send("<a:no:871913506167980052>Debes escribir la ID de el usuario que quieres desbanear!")
const member = await client.users.fetch(userID)

message.guild.fetchBans().then(bans => {
  if(bans.size === 0) return message.channel.send("<a:no:871913506167980052>El servidor no tiene ningun miembro baneado")

  let bUser = bans.find(b => b.user.id == userID)
  if(!bUser) return message.channel.send("<a:no:871913506167980052>Ese miembro no esta baneado")

  message.guild.members.unban(bUser.user)
})


const embed = new Discord.MessageEmbed()

.setTitle("Usuario unbaned")
.addField(`Usuario`, `» ${member.username}`)
.addField(`Moderador`, `» ${message.author}`)
.setColor("0xFF4200")

message.channel.send(embed)

  

 }

} 