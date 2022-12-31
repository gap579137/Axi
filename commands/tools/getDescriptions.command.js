const {
	SlashCommandBuilder,
	StringSelectMenuBuilder,
	ActionRowBuilder,
	EmbedBuilder,
} = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("get_channel_descriptions")
		.setDescription("Console.log the channel descriptions")
		.addChannelOption((channel) =>
			channel
				.setName("channel")
				.setDescription("The channel to get the description of")
				.setRequired(true)
		)
		.addChannelOption((channel) =>
			channel
				.setName("channel_to_send_to")
				.setDescription("The channel to send the embed to")
				.setRequired(true)
		),

	async execute(interaction, client) {
		const channel = interaction.options.getChannel("channel");

		const channelName = channel.name;
		const channelDescription = channel.topic;
		const channelID = channel.id;

		const channelToSendTo =
			interaction.options.getChannel("channel_to_send_to");

		console.log(
			"🚀 ~ file: getDescriptions.command.js:33 ~ execute ~ channelToSendTo",
			channelToSendTo
		);

		const embed = new EmbedBuilder()
			.setTitle(`Channel Description for ${channelName}`)
			.setDescription(channelDescription)
			.setFooter(`Channel ID: ${channelID.id}`)
			.setColor(0x00ff00)
			.setTimestamp()
			.setAuthor(
				interaction.user.username,
				interaction.user.displayAvatarURL({ dynamic: true })
			)
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }));

		await channelToSendTo.send({ embeds: [embed] });
	},
};
