import path from 'path';

export default {
	secret: 'mysecret',
	root: process.cwd(),
	templatesRoot: path.join(process.cwd(), 'templates'),
	logger: {
		// logLevel
		level: 'debug',
	},
	mongodb: {
		debug: true,
		uri: process.env.MONGODB_URI || 'mongodb://localhost/trip_db',
	},
	redis: {
		uri: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
	},
	server: {
		host: 'http://localhost',
		port: process.env.PORT || 3001,
		domain: process.env.DOMAIN || 'http://localhost:3001',
	},
};
