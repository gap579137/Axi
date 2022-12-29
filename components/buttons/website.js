module.exports = {
	data: {
		name: "website",
	},
	async execute(interaction, client) {
		await interaction.reply({
			content: "https://github.com/cryptogap/Axi",
		});
	},
};
