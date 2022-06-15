import { MongoConnectConfig } from '../interfaces/Config';

export function makeMongoURI(config: MongoConnectConfig): string {
	const uri = `mongodb://${config.username}:${config.password}@${config.host}/?authMechanism=DEFAULT&authSource=${config.authSource}`;
	return uri;
}
