//Required for modals
const { InteractionType } = require("discord.js");

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
		} else if (interaction.type == InteractionType.ModalSubmit) {
			const { modals } = client;
			const { customId } = interaction;
			const modal = modals.get(customId);

			if (!modal) return new Error("Modal not found!");

			try {
				await modal.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: "There was an error while executing this modal!",
					ephemeral: true,
				});
			}
		} else if (interaction.isContextMenuCommand()) {
			const { commands } = client;
			const { commandName } = interaction;
			const contextCommand = commands.get(commandName);

			if (!contextCommand) return new Error("Context command not found!");

			try {
				await contextCommand.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: "There was an error while executing this context menu!",
					ephemeral: true,
				});
			}
		}
	},
};
