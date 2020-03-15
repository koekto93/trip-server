// request/response logger
import * as logger from '../libs/logger';
import * as Koa from 'koa';

export const init = (app: Koa) =>
	app.use((ctx: Koa.Context, next: Koa.Next) => {
		logger.info(`${ctx.method} ${ctx.url}`, { requestId: ctx.requestId });

		return next();
	});
