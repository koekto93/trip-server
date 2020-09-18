// request/response logger
import * as Koa from 'koa';
import { logger } from '../libs/logger';

export const init = (app: Koa) =>
	app.use((ctx: Koa.Context, next: Koa.Next) => {
		logger.info(`${ctx.method} ${ctx.url}`, { requestId: ctx.requestId });

		return next();
	});
