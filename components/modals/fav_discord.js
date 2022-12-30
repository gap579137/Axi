//This is the response handerler for the modal fav_discord.js

module.exports = {
	data: {
		name: "fav_discord",
	},

	async execute(interaction, client) {
		console.log(
			interaction.fields.getTextInputValue("fav_discord_input").toLowerCase()
		);
		await interaction.reply({
			content: `I like ${interaction.fields
				.getTextInputValue("fav_discord_input")
				.toLowerCase()} too!`,
		});
	},
};
