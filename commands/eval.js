const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { inspect } = require('util')

module.exports = {
  name: "eval", 
  alias: ["e"],

execute (client, message, args){
  

  if(message.author.id !== "752918867273187378") return message.channel.send("<a:no:871913506167980052>Solamente mi creador puedo usar este comando!")

const command = args.join(" ")
if(!command) return message.channel.send("<a:no:871913506167980052>Debes escribir un comando!")

try {
  const evaled = eval(command)
  let palabras = ["token", "destroy"]
  if(palabras.some(word => message.content.toLowerCase().includes(word))){
    return message.channel.send("<a:no:871913506167980052>Esas palabras no estan permitidas!")
  }
  const embed = new Discord.MessageEmbed()
  .setColor("0xE24C3F")
  .setTitle("Evaluado correctamente!")
  .addField(`**Tipo**:`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
  .addField("**Evaluado en:**", `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
  .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
  .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0 })}\`\`\``)

  message.channel.send(embed)
} catch (error) {
  const embedfallo = new Discord.MessageEmbed()

  .setColor("RED")
  .addField(`Entrada`, `\`\`\`js\n${command}\`\`\``)
  .addField(`Error`, `\`\`\`js\n${error}\`\`\``)

  message.channel.send(embedfallo)
}
  

 }

} 