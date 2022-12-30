const fs = require("fs");

module.exports = (client, interaction) => {
	client.handleComponents = async () => {
		//This section loops through the components folder
		const componentFolders = fs.readdirSync("./components");
		for (const folder of componentFolders) {
			const componentFiles = fs
				.readdirSync(`./components/${folder}`)
				.filter((file) => file.endsWith(".js"));

			const { buttons, selectMenus, modals } = client;

			switch (folder) {
				//This section handles all the buttons
				case "buttons":
					for (const file of componentFiles) {
						const button = require(`../../components/${folder}/${file}`);
						buttons.set(button.data.name, button);
					}
					break;
				//This section handles all the select menus
				case "selectMenus":
					for (const file of componentFiles) {
						const selectMenu = require(`../../components/${folder}/${file}`);
						selectMenus.set(selectMenu.data.name, selectMenu);
					}
					break;
				//This section handles all the modals
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
