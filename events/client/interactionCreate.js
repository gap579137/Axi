module.exports = {
	name: "interactionCreate",
	async execute(interaction, client) {
		if (interaction.isChatInputCommand()) {
			const { commands } = client;
			const { commandName } = interaction;
			const command = commands.get(commandName);

			if (!command) return new Error("Command not found!");

			try {
				await command.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: "There was an error while executing this command!",
					ephemeral: true,
				});
			}
		} else if (interaction.isButton()) {
			const { buttons } = client;
			const { customId } = interaction;
			const button = buttons.get(customId);

			if (!button) return new Error("Button not found!");

			try {
				await button.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: "There was an error while executing this button!",
					ephemeral: true,
				});
			}
		} else if (interaction.isStringSelectMenu()) {
			const { selectMenus } = client;
			const { customId } = interaction;
			const selectMenu = selectMenus.get(customId);

			if (!selectMenu) return new Error("Select menu not found!");

			try {
				await selectMenu.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: "There was an error while executing this select menu!",
					ephemeral: true,
				});
			}
		}
	},
};
