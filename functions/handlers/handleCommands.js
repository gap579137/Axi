const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const fs = require("fs");

module.exports = (client) => {
	client.handleCommands = async () => {
		const commandFolders = fs.readdirSync("./commands");
		for (const folder of commandFolders) {
			const commandFiles = fs
				.readdirSync(`./commands/${folder}`)
				.filter((file) => file.endsWith(".js"));

			const { commands, commandArray } = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArray.push(command.data.toJSON());
				console.log("🚀 ~ file: commandHandler.js:16", command.data.name);
			}
		}

		const clientID = process.env.DISCORD_BOT_CLIENT_ID;
		//If you would like the commands to only be available in a specific guild, uncomment the following line and replace the guild ID with your guild ID.
		// const guildID = process.env.GUILD_ID;

		const rest = new REST({ version: "9" }).setToken(
			process.env.DISCORD_BOT_TOKEN
		);

		try {
			console.log("Started refreshing application (/) commands.");
			await rest.put(
				//If you would like the commands to only be available in a specific guild, uncomment the following line and replace the guild ID with your guild ID.
				// Routes.applicationGuildCommands(clientID, guildID),
				Routes.applicationCommands(clientID),
				{ body: client.commandArray }
			);
			console.log("Successfully reloaded application (/) commands.");
		} catch (error) {
			console.error(error);
		}
	};
};
