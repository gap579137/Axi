const {
	ContextMenuCommandBuilder,
	ApplicationCommandType,
} = require("discord.js");

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName("getAvatar")
		.setType(ApplicationCommandType.User),

	async execute(interaction, client) {
		const user = interaction.options.getUser("user");
		await interaction.reply(user.displayAvatarURL({ dynamic: true }));
	},
};
