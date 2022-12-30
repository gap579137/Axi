const {
	SlashCommandBuilder,
	StringSelectMenuBuilder,
	ActionRowBuilder,
} = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("info")
		.setDescription("Get info about Axi"),

	async execute(interaction, client) {
		const menu = new StringSelectMenuBuilder()
			.setCustomId("info_menu")
			.setPlaceholder("Select an option")
			.setMinValues(1)
			.setMaxValues(1)
			.addOptions(
				{
					label: "GitHub",
					description: "Get a link to the Axi GitHub",
					value: "github",
				},
				{
					label: "W3U Website",
					description: "Get a link to the W3U Website",
					value: "w3u",
				},
				{
					label: "W3U Status Page",
					description: "Get a link to the W3U Status Page",
					value: "status",
				},
				{
					label: "test",
					description: "test",
					value: "test",
				}
			);

		const row = new ActionRowBuilder().addComponents(menu);

		await interaction.reply({
			content: "Select an option from the menu below",
			components: [row],
		});
	},
};
