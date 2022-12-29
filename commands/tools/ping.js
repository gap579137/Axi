const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with ping information and latency."),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true,
		});

		const newMessage = `API Latency is ${Math.round(
			client.ws.ping
		)}ms\n Message Latency is ${
			message.createdTimestamp - interaction.createdTimestamp
		}ms`;

		await interaction.editReply({
			content: newMessage,
		});
	},
};
