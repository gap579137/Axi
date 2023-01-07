const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("invite")
		.setDescription("Gets a users server invites")
		.addUserOption((option) =>
			option
				.setName("user")
				.setDescription("The user to get the invites of")
				.setRequired(true)
		),
	async execute(interaction, client) {
		const user = interaction.options.getUser("user");
		const invites = await interaction.guild.invites.fetch();
		const userInvites = invites.filter(
			(i) => i.inviter && i.inviter.id === user.id
		);

		let inviteCount = 0;
		userInvites.forEach((invite) => (inviteCount += invite.uses));

		const embed = new EmbedBuilder()
			.setTitle(`${user.username}'s Invites`)
			.setDescription(
				`**${user.username}** has invited **${inviteCount}** people to the server!`
			)
			.setColor(0x00ff00)
			.setTimestamp();

		try {
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.log(error);
		}
	},
};
