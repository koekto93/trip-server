//import { winston } from 'winston';
//import winston = require('winston');
import winston from 'winston';
import config from 'config';

export const logger = winston.createLogger({
	format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
	level: config.get('logger.level'),
	transports: [new winston.transports.Console()],
});
