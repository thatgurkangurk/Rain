import { ICommand } from 'wokcommands';
import Docs from 'discord.js-docs';
import { MessageEmbed } from 'discord.js';

const branch = 'stable';
const max = 1024;

const replaceDisco = (str: string) =>
	str
		.replace(/docs\/docs\/disco/g, `docs/discord.js/${branch}`)
		.replace(/ \(disco\)/g, '');

export default {
	category: 'Utility',
	description: 'Search the Discord.JS documentation.',

	slash: 'both',
	testOnly: true,

	minArgs: 1,
	expectedArgs: '<search-query>',

	callback: async ({ text }) => {
		const doc = await Docs.fetch(branch);
		const results = await doc.resolveEmbed(text);

		if (!results) {
			return 'Could not find the documentation for the search query.';
		}

		const string = replaceDisco(JSON.stringify(results));

		const embed: MessageEmbed = JSON.parse(string);

		embed.author.url = `https://discord.js.org/#/docs/discord.js/${branch}/general/welcome`;

		const extra =
			'\n\nView more here: ' +
			/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
				.exec(embed.description)![0]
				.split(')')[0];

		for (const field of embed.fields || []) {
			if (field.value.length >= max) {
				field.value = field.value.slice(0, max);
				const split = field.value.split(' ');
				let joined = split.join(' ');

				while (joined.length >= max - extra.length) {
					split.pop();
					joined = split.join(' ');
				}

				field.value = joined + extra;
			}
		}

		if (
			embed.fields &&
			embed.fields[embed.fields.length - 1].value.startsWith('[View source')
		) {
			embed.fields.pop();
		}

		return embed;
	},
} as ICommand;
