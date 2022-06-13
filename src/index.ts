import 'dotenv/config';

import { Config } from './interfaces/Config';
import { Rain } from './client/Client';

const BotConfig: Config = {
	token: process.env.TOKEN,
};

new Rain().start(BotConfig);
