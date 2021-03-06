import { ICommand } from 'wokcommands';

export default {
	category: 'Utility',
	description: 'Replies with pong', // Required for slash commands

	slash: 'both', // Create both a slash and legacy command
	testOnly: true, // Only register a slash command for the testing guilds

	callback: ({ client }) => {
		const reply = `🏓 Pong! My ping is ${client.ws.ping}ms.`;
		return {
			content: reply,
		};
	},
} as ICommand;
