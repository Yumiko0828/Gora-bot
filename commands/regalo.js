const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "regalo", 
  alias: ["present"],

execute (client, message, args){

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("<a:no:871913506167980052>Debes mencionar a un usuario!")

  const regal = args.slice(1).join('')
   if(!regal) return message.channel.send(`<a:no:871913506167980052>Debes poner el link del regalo que quieres enviar!`)

  var msgr = args.slice(2).join(' ')
   if(!msgr){
     msgr = 'ninguno<a:loading:871913621284855818>'
   }

/*-------------EMBED REGALO MD-------------*/
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Enviada desde ${message.guild.name}`, message.author.displayAvatarURL())
    .setTitle(`<a:regalo:875550341691736064>¡Tienes un nuevo regalo!<a:regalo:875550341691736064>`)
    .setURL(`${regal}`)
    .addField(`Enviado por:`, `» ${message.author.tag}`)
    .addField(`Mensaje extra:`, `» ${msgr}`)
    .addField(`Regalo:`, `» [Click Aquí](${regal})`)
    .setColor("0xE24C3F")
    .setTimestamp()

/*----------ENVIADO CORRECTAMENTE----------*/
  const envied = new Discord.MessageEmbed()
    .setDescription(`<a:regalo:875550341691736064>Regalo enviado a ${user} correctamente!`)
    .setColor("0xE24C3F")

  message.delete()
  
  user.send(embed)
  message.channel.send(envied)

 }

} 