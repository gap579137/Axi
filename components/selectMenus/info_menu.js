const { EmbedBuilder } = require("discord.js");

//This is the response handerler for the select menu info.command.js
module.exports = {
	data: {
		name: "info_menu",
	},

	async execute(interaction, client) {
		//get interaction values
		const input = interaction.values[0];
		console.log(input);

		if (input === "github") {
			const embed = new EmbedBuilder()
				.setColor(0xff0000)
				.setTitle("GitHub")

				.setURL("https://github.com/cryptogap/Axi")
				.setAuthor({
					name: "Axi Bot",
					iconURL:
						"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
				})
				.setDescription("This is the link to the Axi GitHub")
				.setThumbnail(
					"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png"
				)
				.setTimestamp()
				.setFooter({
					text: "Axi Bot",
					iconURL:
						"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
				});

			await interaction.reply({
				embeds: [embed],
			});
		} else if (input === "w3u") {
			const embed = new EmbedBuilder()
				.setColor(0xff0000)
				.setTitle("W3U Website")

				.setURL("https://w3u.io")
				.setAuthor({
					name: "Axi Bot",
					iconURL:
						"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
				})
				.setDescription("This is the link to the W3U Website")
				.setThumbnail(
					"https://w3u.io/_next/image?url=%2Fimg%2Flogo%2Flogo-mockup-64.png&w=48&q=75"
				)
				.setTimestamp()
				.setFooter({
					text: "W3U Team",
					iconURL:
						"https://w3u.io/_next/image?url=%2Fimg%2Flogo%2Flogo-mockup-64.png&w=48&q=75",
				});

			await interaction.reply({
				embeds: [embed],
			});
		} else if (input === "status") {
			const embed = new EmbedBuilder()
				.setColor(0xff0000)
				.setTitle("W3U Status Page")

				.setURL("https://uptime.w3u.io")
				.setAuthor({
					name: "Axi Bot",
					iconURL:
						"https://raw.githubusercontent.com/cryptogap/Axi/main/logo/bot_logo.png",
				})
				.setDescription("This is the link to the W3U Status Page")
				.setThumbnail(
					"https://w3u.io/_next/image?url=%2Fimg%2Flogo%2Flogo-mockup-64.png&w=48&q=75"
				)
				.setTimestamp()
				.setFooter({
					text: "W3U Team",
					iconURL:
						"https://w3u.io/_next/image?url=%2Fimg%2Flogo%2Flogo-mockup-64.png&w=48&q=75",
				});

			await interaction.reply({
				embeds: [embed],
			});
		} else {
			await interaction.reply({
				content: "Something went wrong, please try again later.",
				ephemeral: true,
			});
		}
	},
};
