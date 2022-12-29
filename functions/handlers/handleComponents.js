const fs = require("fs");

module.exports = (client, interaction) => {
	client.handleComponents = async () => {
		const componentFolders = fs.readdirSync("./components");
		for (const folder of componentFolders) {
			const componentFiles = fs
				.readdirSync(`./components/${folder}`)
				.filter((file) => file.endsWith(".js"));

			const { buttons, selectMenus, modals } = client;

			switch (folder) {
				case "buttons":
					for (const file of componentFiles) {
						const button = require(`../../components/${folder}/${file}`);
						buttons.set(button.data.name, button);
					}
					break;

				case "selectMenus":
					for (const file of componentFiles) {
						const selectMenu = require(`../../components/${folder}/${file}`);
						selectMenus.set(selectMenu.data.name, selectMenu);
					}
					break;

				case "modals":
					for (const file of componentFiles) {
						const modal = require(`../../components/${folder}/${file}`);
						modals.set(modal.data.name, modal);
					}

					break;

				default:
					break;
			}
		}
	};
};
