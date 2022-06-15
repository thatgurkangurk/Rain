import { Options } from 'wokcommands';

export interface Config {
	token: string;
	wokOptions: Options;
}

export interface MongoConnectConfig {
	username: string;
	password: string;
	host: string;
	authSource: string;
}
