import 'dotenv/config';
import { Config, MongoConnectConfig } from './interfaces/Config';
import { Rain } from './client/Client';
import path from 'path';
import { makeMongoURI } from './helpers/Mongo';

const MongoConfig: MongoConnectConfig = {
	host: 'mongo.gurkz.me',
	password: process.env.MONGO_PASSWORD,
	authSource: 'rain',
	username: 'Rain',
};

const BotConfig: Config = {
	token: process.env.TOKEN,
	wokOptions: {
		commandsDir: path.join(__dirname, 'commands'),
		featuresDir: path.join(__dirname, 'features'),
		botOwners: ['592449995035246605', '981531224428380160'],
		typeScript: true,
		testServers: ['985111587708870676'],
		mongoUri: makeMongoURI(MongoConfig),
	},
};

new Rain().start(BotConfig);
