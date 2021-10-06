const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "REACTION"] })
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
require('dotenv').config();


const fs = require('fs'); 
let { readdirSync } = require('fs'); 

const disbut = require('discord-buttons');
disbut(client);


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//---------------------------- CODIGO DEL BOT ----------------------------//

function presence(){
    client.user.setPresence({
        status:"idle",
        activity: {
            name: "g/help | v4.0.5",
            type: "PLAYING"
        }
    })
}
client.on("ready", () => {
    console.log(`Bot: ${client.user.tag}`); 
    presence();
});

const keepAlive = require('./server');
keepAlive();


//-----------------------------EVENTO MESSAGE-----------------------------//

client.on('message', async message => {
//-------PREFIX-------//
 let prefix = 'g/'

if(message.author.bot) return;

if(message.channel.type === 'dm'){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    return message.channel.send('<a:no:871913506167980052>Lo siento, no respondo por MD!')
}


if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}

});

//----------------TOKEN----------------//
client.login("ODcxOTA1OTk5MzIwMTUwMDM2.YQiHvQ.1uPuU8HlIU29LUWJ35J91KBMNGY");