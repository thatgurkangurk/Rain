import 'dotenv/config';
import { Config } from './interfaces/Config';
import { Rain } from './client/Client';
import path from 'path';

const BotConfig: Config = {
	token: process.env.TOKEN,
	wokOptions: {
		commandsDir: path.join(__dirname, 'commands'),
		featuresDir: path.join(__dirname, 'features'),
		botOwners: ['592449995035246605', '981531224428380160'],
		typeScript: true,
		testServers: ['985111587708870676'],
	},
};

new Rain().start(BotConfig);
