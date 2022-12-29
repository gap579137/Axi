const {
	SlashCommandBuilder,
	ModalBuilder,
	ActionRowBuilder,
	TextInputBuilder,
	TextInputStyle,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("fav_discord")
		.setDescription("What is your favorite part about discord?"),

	async execute(interaction, client) {
		const modal = new ModalBuilder()
			.setTitle("Favorite Discord")
			.setCustomId("fav_discord");

		const input = new TextInputBuilder()
			.setCustomId("fav_discord_input")
			.setLabel("Favorite aspect of discord")
			.setPlaceholder("What is your favorite part about discord?")
			.setStyle(TextInputStyle.Short)
			.setMinLength(1)
			.setMaxLength(100)
			.setRequired(true);

		const row = new ActionRowBuilder().addComponents(input);

		modal.addComponents(row);
		await interaction.showModal(modal);
	},
};
