const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "userinfo",
  alias: [],

execute (client, message, args){



let estados = {
  
"online": "🟢En linea",
"idle": "🌙Ausente",
"dnd": "⛔No molestar",
"offline": "⚪Desconectado/invisible"
  
  
  
};


const member = message.mentions.members.first() || message.member;


function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  },template)
    
  }
  
  
  const embedinfo = new Discord.MessageEmbed()
  
  .setColor("0xE24C3F")
  .setDescription(`📚 | Informacion de **${member}**`)
  .addField('👤 | Nombre:', member.user.tag)
  .addField('🆔️ | Id:', ` ${member.user.id}`)
  .addField('👌🏻 | Apodo:', `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`)
  .addField('📆 | Union al servidor:', formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
  .addField('⏰ | Creacion de la cuenta:', formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))
  .addField('💠 | Roles:', member.roles.cache.map(roles => `\`${roles.name}\``).join("."))
  .addField('🚀 | Booster:', member.premiumSince ? 'Si boostea' : 'No boostea')
  .addField('♻️ | Estado:', estados[member.user.presence.status])
  .setThumbnail(member.user.displayAvatarURL( {format: "png", dynamic: "true"} ));
  
  message.channel.send(embedinfo)
  
}

  

 

}