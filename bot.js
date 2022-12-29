// pulls in the .env file
require("dotenv").config();

// pulls in the discord.js module
const { Client, Collection, GatewayIntentBits } = require("discord.js");

//pulls in the fs module
const fs = require("fs");

// creates a new client
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
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

client.handleEvents();
client.handleCommands();
client.handleComponents();

// logs in the bot
client.login(process.env.DISCORD_BOT_TOKEN);
