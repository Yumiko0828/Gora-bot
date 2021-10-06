const Discord = require('discord.js');
const { MessageMenuOption, MessageMenu} = require("discord-buttons")

module.exports = {
  name: "help",
  alias: [],

async execute (client, message, args){

//-------------------------EMBED PRINCIPAL-------------------------//
  const helpembed = new Discord.MessageEmbed()
    .setTitle('» <a:verified:871913650653364235>Help «')
    .setDescription('**>** Usa el **Gora Menú** para moverte entre categorias.\n**>** El menu dejara de funcionar en **10 minutos**!\n\nBienvenido al apartado de ayuda, te encuentras en el **Apartado principal**, para moverte por los distintos apartados/categorias usas el **Gora Menú** que tienes abajo!')
    .setColor("0xE24C3F")
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//---------------------HELP COMMANDS---------------------//
  const comandos = new Discord.MessageEmbed()
    .setTitle('» <:code:893694283679432735>Comandos «')
    .setDescription('Usa el **Gora Menú** para moverte\nentre categorias.')
    .setColor("0xE24C3F")
    .addField('`g/say (message)`', 'Repite el mensaje que hayas escrito.')
    .addField('`g/invite`', 'Apartado de Soporte.')
    .addField('`g/jumbo <:emoji:>`', 'Envia el emoji aun más grande.')
    .addField('`g/clear (amount)`', 'Elimina la cantidad de mensajes indicados en el canal donde se ejecuto.')
    .addField('`g/suggest (sugerencia)`', 'Envia una sugerencia a un canal establecido por servidor **(REQUIERE g/cs)**.')
    .addField('`g/cs [#channel]`', 'Establece el canal de sugerencias **por** servidor.')
    .addField('`g/membercount`', 'Cantidad de miembros en un servidor el Discord.')
    .addField('`g/regalo [@user] [URL] (message (opcional))`', 'Envia un regalo al usuario mencionado por MD.')
    .addField('`g/neko`', 'Imagenes neko.')
    .addField('`g/nekogif`', 'Gif neko.')
    .addField('`g/meow`', 'Imagenes de gatitos')
    .addField('`g/feed`', 'Gif comiendo')
    .addField('`g/meme`', 'Envia un meme random.')
    .addField('`g/kiss [@user]`', 'Manda un beso al usuario mencionado.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//--------------------HELP MODERATION--------------------//
  const moderacion = new Discord.MessageEmbed()
    .setTitle('» <:staff:871937908985184297>Moderacion «')
    .setDescription('Usa el **Gora Menú** para moverte\nentre categorias.')
    .setColor("0xE24C3F")
    .addField('`g/kick [@user] (reason)`', 'Kickea al jugador especificado del servidor.')
    .addField('`g/ban [@user] (reason opcional)`', 'Banea al jugador especificado.')
    .addField('`g/unban [ID]`', 'Desbanea al jugador usando su ID.')
    .addField('`g/mute [@user] (time) (reason)`', 'Mutea a un jugador por un tiempo especificado.')
    .addField('`g/mrol [@rol]`', 'Establece el rol de mute **(REQUIERE g/mute)**.')
    .addField('`g/tempban [@user] (time)`', 'Banea temporalmente al usuario mencionado y luego lo desbanea.')
    .addField('`g/warn [@user] (reason)`', 'Advierte a un jugador.')
    .addField('`g/unwarn [@user]`', 'Quita la advertencia de un jugador.')
    .addField('`g/warns [@user]`', 'La cantidad de advertencias que tiene el jugador.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//--------------------HELP GAMES--------------------//
  const games = new Discord.MessageEmbed()
    .setTitle('» <a:minecraft:871913756475682867>Games «')
    .setDescription('Usa el **Gora Menú** para moverte\nentre categorias.')
    .setColor("0xE24C3F")
    .addField('`g/mcstatus (java/bedrock) [IP]:(Puerto (Opcional))`', 'Muestra el status del servidor de Minecraft especificado.')
    .addField('`g/8ball (pregunta)`', 'hasme una pregunta y te respondere.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//--------------------HELP NSFW--------------------//
  const nsfw = new Discord.MessageEmbed()
    .setTitle('» <a:alert:871913701589016646>Nsfw «')
    .setColor("0xE24C3F")
    .setDescription('<a:alert:871913701589016646>Esta clase de comandos solo se pueden usar en canales **NSFW**')
    .addField('`g/hentai`', 'Hentai gif.')
    .addField('`g/nneko`', 'Neko gif nsfw.')
    .addField('`g/cum [@user]`', 'Vente en el usuario mencionado.')
    .addField('`g/spank [@user]`', 'Azota al usuario mencionado.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//--------------------HELP CREADOR--------------------//
  const owner = new Discord.MessageEmbed()
    .setTitle('» <a:hypeshiny:871931906629972039>Owner «')
    .setColor("0xE24C3F")
    .setDescription('<:GoraWarn:872140808348901436>Esta clase de comandos solo pueden ser usados por el\ncreador del bot!<:GoraWarn:872140808348901436>')
    .addField('`g/servers`', 'Informacion de los server en los que estoy.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

//--------------------HELP OTHERS--------------------//
  const others = new Discord.MessageEmbed()
    .setTitle('» <:upgrade:871915619505827861> Otros «')
    .setColor("0xE24C3F")
    .setDescription('Usa el **Gora Menú** para moverte\nentre categorias.')
    .addField('`g/wallpaper`', 'Genera un wallpaper aleatorio.')
    .addField('`g/serverinfo`', 'Informacion del servidor donde se ejecute.')
    .setThumbnail(`https://cdn.discordapp.com/icons/871907014098448415/9560135af2f509e5f91bcac7aea6015d.webp`)

/*----------------------------OPCIONES----------------------------*/
  let opcion1 = new MessageMenuOption()
  .setEmoji("893694283679432735")
  .setValue("1")
  .setLabel("Comandos")
  .setDescription("Click para ver los comandos principales.")

  let opcion2 = new MessageMenuOption()
  .setEmoji("871937908985184297")
  .setValue("2")
  .setLabel("Moderacion")
  .setDescription("Click para ver los comandos de moderacion.")

  let opcion3 = new MessageMenuOption()
  .setEmoji("871913756475682867")
  .setValue("3")
  .setLabel("Games")
  .setDescription("Click para ver los comandos de juegos.")

  let opcion4 = new MessageMenuOption()
  .setEmoji("871913701589016646")
  .setValue("4")
  .setLabel("Nsfw")
  .setDescription("Click para ver los comandos nsfw.")

  let opcion5 = new MessageMenuOption()
  .setEmoji("871931906629972039")
  .setValue("5")
  .setLabel("Owner")
  .setDescription("Click para ver los comandos del dueño.")

  let opcion6 = new MessageMenuOption()
  .setEmoji("871915619505827861")
  .setValue("6")
  .setLabel("Otros")
  .setDescription("Click para ver otros comandos.")

  let opcion7 = new MessageMenuOption()
  .setEmoji("871913674586091610")
  .setValue("7")
  .setLabel("Inicio")
  .setDescription("Click para regresar a inicio.")

/*------------MENU------------*/
  let menu = new MessageMenu()
  .setID("100")
  .setPlaceholder("✨Gora Menú✨")
  .addOption(opcion1)
  .addOption(opcion2)
  .addOption(opcion3)
  .addOption(opcion4)
  .addOption(opcion5)
  .addOption(opcion6)
  .addOption(opcion7)

  const msg = await message.channel.send(helpembed, menu)

  const filter = (menu) => menu.clicker.id === message.author.id
  const collector = msg.createMenuCollector(filter, { time : 600000 })

  collector.on('collect', async (menu) => {
    if(menu.values[0] === '1'){
      menu.reply.defer()
      return menu.message.edit(comandos)
    }
    if(menu.values[0] === '2'){
      menu.reply.defer()
      return menu.message.edit(moderacion)
    }
    if(menu.values[0] === '3'){
      menu.reply.defer()
      return menu.message.edit(games)
    }
    if(menu.values[0] === '4'){
      menu.reply.defer()
      return menu.message.edit(nsfw)
    }
    if(menu.values[0] === '5'){
      menu.reply.defer()
      return menu.message.edit(owner)
    }
    if(menu.values[0] === '6'){
      menu.reply.defer()
      return menu.message.edit(others)
    }
    if(menu.values[0] === '7'){
      menu.reply.defer()
      return menu.message.edit(helpembed)
    }
  })

 }

}