const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require ('megadb')
const cosa = new db.crearDB('canalsugerencias')


module.exports = {
  name: "sugerencia", 
  alias: ["suggest"],

async execute (client, message, args){

   message.delete()

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
  const canalsugerencias = client.channels.cache.get(canal)

  if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
    message.channel.send("<a:no:871913506167980052>Este servidor no tiene ningun canal de sugerencias establecido,para hacerlo usa el comando g/cs")

    return;
  }

  const usuario = message.author
  
  const sugerencia = args.join(" ")
  if(!sugerencia) return message.channel.send("<a:no:871913506167980052>Debes escribir una sugerencia")

  const embed = new Discord.MessageEmbed()

  .setTitle("✨Ha llegado una nueva sugerencia✨")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .addField(`📥La sugerencia es:`, `**${sugerencia}**`, true)
  .setColor("RANDOM")
  .setFooter("Vota si la sugerencia te parece buena.")

  const embedbuena = new Discord.MessageEmbed()

  .setTitle("<a:verified:871913650653364235>Todo ha salido bien!")
  .setDescription("📤La sugerencia ha sido enviada a el canal establecido")
  .setColor("0xE24C3F")

  message.channel.send(embedbuena)

  canalsugerencias.send(embed).then(async msg => {
    await msg.react('871913544206123079')
    await msg.react('871913506167980052')
  })

  

 }

} 