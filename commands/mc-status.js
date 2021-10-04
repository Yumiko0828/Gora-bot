const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const util = require('minecraft-server-util')

module.exports = {
  name: "mcstatus", 
  alias: [],

execute (client, message, args){

  let type = args[0]
  let arguments = args.slice(1).join(' ')
  let separators = arguments.split(':')
  let ip = separators[0]
  let port = separators[1]
  if(!type) return message.channel.send("<a:no:871913506167980052>No especificaste la plataforma a verificar el estado!")
  if(!ip) return message.channel.send("<a:no:871913506167980052>No verificaste la ip a verificar!")
  if(type === 'java'){
    if(!port) port = 25565;
    else port = parseInt(port);
    util.status(ip, { port: port }).then(async r => {
      let icon;
      if(!r.favicon){
        icon = 'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-09-05-12-53/pack__1_.png'
      } else {
       let favicon = r.favicon;
       let stbuff = new Buffer.from(favicon.split(",")[1], "base64")
       icon = new MessageAttachment(stbuff, 'icon.png')
      }

      let embed = new Discord.MessageEmbed()

      .setTitle("<:online:871917175139618846> | Servidor en Linea!")
      .attachFiles(icon)
      .setThumbnail('attachment://icon.png')
      .setColor("0x74FF00")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .setImage("https://status.mclive.eu/A%20Minecraft%20Server/${ip}/${port}/banner.png")
      .setDescription(`**Estado de el servidor __${ip}:${port}__**
      
      **Plataforma:** *\`Java\`*
      **Version:** *\`${r.version}\`*
      **Jugadores Actuales:** *\`${r.onlinePlayers} / ${r.maxPlayers}\`*
      `)
      if (!r.samplePlayers === null){
        embed.addField('Lista de jugadores:', r.samplePlayers(m = m.name).join('\n'))
      }
      message.channel.send(embed)
    }).catch(e => {
      let embedError = new Discord.MessageEmbed()

      .setTitle("<:offline:871917193728757770> | Servidor apagado")
      .setDescription(`El servidor se encuentra apagado,tal vez sea por algna de las razones que dire aqui abajo
      
      -Verifique que puso el comando correctamente y vuelva a intentarlo
      -No es necesario un puerto si no tiene uno, yo lo pondre automaticamente como *\`25565\`*
      -Uso correcto de el comando g/mcstatus (java/bedrock) [IP]:(Puerto (Opcional))
      -Si ninguna de las razones coincide con su problema es porque el servidor se encuentra apagado o no existe la IP que indico!
      `)
      .setColor("RED")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setThumbnail('https://i.imgur.com/u6J1rOF.png')
      message.channel.send(embedError)
      console.log(e)
    })
  }

  if(type === 'bedrock'){
    if(!port) port = 19132;
    else port = parseInt(port);
    util.statusBedrock(ip, { port: port }).then(async r => {

      let embedBedrock = new Discord.MessageEmbed()

      .setTitle("<:online:871917175139618846> | Servidor en Linea!")
      .attachFiles(icon)
      .setThumbnail('attachment://icon.png')
      .setColor("0x74FF00")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .setDescription(`**Estado de el servidor __${ip}:${port}__**
      
      **Plataforma:** *\`Bedrock\`*
      **Edicion:** *\`${r.edition}\`*
      **Version:** *\`${r.version}\`*
      **Modo de Juego:** *\`${r.gameMode}\`*
      **Jugadores Actuales:** *\`${r.onlinePlayers} / ${r.maxPlayers}\`*
      **Mensaje de el dia:** \n${r.motdeLine1}\n${r.motdeLine2}
      `)
      message.channel.send(embedBedrock)
    }).catch(e => {
      let embedErrorB = new Discord.MessageEmbed()

      .setTitle("<:offline:871917193728757770> | Servidor apagado")
      .setDescription(`El servidor se encuentra apagado,tal vez sea por algna de las razones que dire aqui abajo
      
      -Verifique que puso el comando correctamente y vuelva a intentarlo
      -No es necesario un puerto si no tiene uno, yo lo pondre automaticamente como *\`19132\`*
      -Uso correcto de el comando g/mcstatus (java/bedrock) [IP]:(Puerto (Opcional))
      -Si ninguna de las razones coincide con su problema es porque el servidor se encuentra apagado o no existe la IP que indico!
      `)
      .setColor("RED")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setThumbnail('https://i.imgur.com/u6J1rOF.png')
      message.channel.send(embedErrorB)
      console.log(e)
    })
  }

 }

} 