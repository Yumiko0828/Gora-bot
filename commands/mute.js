const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ("megadb")
const muterol = new db.crearDB("muterol")
const ms = require ("ms")



module.exports = {
  name: "mute", 
  alias: [],

async execute (client, message, args){


  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send(`<a:no:871913506167980052>No tienes permisos!`)

  let mencionado = message.mentions.members.first()
  if(!mencionado) return message.channel.send(`<a:no:871913506167980052>Debes mencionar a la persona que quieres mutear`)
  
  let time = args[1]
  if(!time) message.channel.send(`<a:no:871913506167980052>Debes espeficar un tiempo`)
  let timer = ms(time)


  var razon = args[2]
  if(!razon) return message.channel.send(`<a:no:871913506167980052>Debes escribir una razon`)

  if(!muterol.tiene(message.guild.id)) return message.channel.send(`<a:alert:871913701589016646>Este servidor no tiene ningun rol para mutear establecido,porfavor establesca el rol con el comando **g/mrol** e intente de nuevo`)

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send(`<a:no:871913506167980052>El usuario mencionado ya se encuentra muteado`)

  mencionado.roles.add(rol)

const embed7 = new Discord.MessageEmbed()
  .setTitle('Usuario muteado')
  .addField(`Usuario`, `» ${mencionado}`)
  .addField(`Tiempo`, `» ${time}`)
  .addField(`Razón`, `» ${razon}`)
  .setColor("0xE24C3F")
message.channel.send(embed7)

  await setTimeout(async function(){

    await mencionado.roles.remove(rol)

    await message.channel.send(`<a:si:871913544206123079>Se acabo el mute para ${mencionado}!`).catch(error => {
      message.channel.send(`<a:alert:871913701589016646>Hubo un error inesperado! **${error}**`)
    })
  }, timer)

  

 }

} 