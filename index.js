const fs = require('fs');
// The env module is imported for all env variables.

const env = require('dotenv').config();

// All application imports from node modules.

const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({ 
	intents: [Guilds, GuildMembers, GuildMessages],
	partials: [User, Message, GuildMember, ThreadMember]
});

client.commands = new Collection();
client.commandArray = [];

/*const functionFolders = fs.readdirSync('./functions');
for (const folder of functionFolders) {
	const functionFiles = fs.readdirSync(`./functions/${folder}`)
	.filter((file) => file.endsWith('.js'));
	for (const file of functionFiles)
	fs.readFileSync(`./functions/${folder}/${file}`)(client);
}*/

// Imported and customized modules for functionality.

const welcome = require('./events/welcome');
const ready = require('./events/ready');
const doNotTalk = require('./events/message');

// All environment variables.

const botKey = process.env.AFRI_BOT;

// The bot is logged in with Key.

ready(client);
welcome(client);
doNotTalk(client);

//client.handleEvents();
//client.handleCommands();
client.login(botKey);




