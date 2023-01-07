const { EmbedBuilder } = require("discord.js");
console.log("Welcome.js loaded");

module.exports = (client) => {
	client.on("guildMemberAdd", async (member) => {
		const channel = member.guild.channels.cache.get("1061085587475542096");

		if (!channel) {
			console.log("Welcome channel not found");
			return;
		}

		console.log("Got this far");

		const embed = new EmbedBuilder()
			.setTitle(`Welcome to the server, ${member.user.username}!`)
			.setDescription(`Make sure to read the rules and have fun!`)
			.setColor(0x00ff00)
			.setTimestamp();
		try {
			await member.send({ embeds: [embed] });
		} catch (error) {
			console.log(error);
		}

		console.log("Sent the welcome message");

		try {
			member.send({ embeds: [embed] });
		} catch (error) {
			console.log(error);
		}
	});
};
