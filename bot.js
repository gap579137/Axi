// pulls in the .env file
require("dotenv").config();

const welcome = require("./clientOn/welcome");

// pulls in the discord.js module
const { Client, Collection, GatewayIntentBits } = require("discord.js");

//pulls in the fs module
const fs = require("fs");

// creates a new client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages,
	],
});

// creates a new collection for commands
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();

// creates command array
client.commandArray = [];

const functionFolders = fs.readdirSync("./functions");
for (const folder of functionFolders) {
	const functionFiles = fs
		.readdirSync(`./functions/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of functionFiles)
		require(`./functions/${folder}/${file}`)(client);
}

//send a message to a specific channel when someone is invited to the server
welcome(client);

client.handleEvents();
client.handleCommands();
client.handleComponents();

// logs in the bot
client.login(process.env.DISCORD_BOT_TOKEN);
