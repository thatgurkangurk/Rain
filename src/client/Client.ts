import consola, { Consola } from 'consola';
import { Client, Intents } from 'discord.js';
import { Config } from '../interfaces/Config';
import WOK from 'wokcommands';

export class Rain extends Client {
	public logger: Consola = consola;
	public config: Config;
	public constructor() {
		super({
			intents: [Intents.FLAGS.GUILDS],
		});
	}
	public start(config: Config) {
		this.config = config;

		this.login(config.token).catch((e) => this.logger.error(e));

		this.once('ready', () => {
			new WOK(this, config.wokOptions);
		});
	}
}
