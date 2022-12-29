const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with ping information and latency."),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: true,
		});

		//Deployes an embed instead of a message.
		const pingEmbed = new EmbedBuilder()
			.setColor(0x00ff00)
			.setTitle("Ping Information")
			.setURL("https://github.com/cryptogap/Axi")
			.setAuthor({
				name: "Axi Bot",
				iconUrl:
					"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
			})
			.setDescription(
				"This command will show you the latency of the bot and the API."
			)
			.setThumbnail(
				"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png"
			)
			.addFields([
				{
					name: "API Latency",
					value: `${Math.round(client.ws.ping)}ms`,
					inline: true,
				},
				{
					name: "Message Latency",
					value: `${message.createdTimestamp - interaction.createdTimestamp}ms`,
					inline: true,
				},
			])
			.setTimestamp()
			.setFooter({
				text: "Ping is the time it takes for a message to be sent and received.",
				iconUrl:
					"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
			});

		//Below is a standard reply, but we can use an embed instead.

		// const newMessage = `API Latency is ${Math.round(
		// 	client.ws.ping
		// )}ms\n Message Latency is ${
		// 	message.createdTimestamp - interaction.createdTimestamp
		// }ms`;

		// await interaction.editReply({
		// 	content: newMessage,
		// });

		await interaction.editReply({
			embeds: [pingEmbed],
		});
	},
};
