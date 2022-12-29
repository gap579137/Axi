const {
	SlashCommandBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("my_github")
		.setDescription("Sends a link to my GitHub"),

	async execute(interaction) {
		const button = new ButtonBuilder()
			.setCustomId("website")
			.setLabel("My GitHub")
			.setStyle(ButtonStyle.Primary);

		const row = new ActionRowBuilder().addComponents(button);

		await interaction.reply({
			content: "Click the button below to go to my GitHub!",
			components: [row],
		});
	},
};
