import Koa from 'koa';
import Router from 'koa-router';
import { init as loggerInit } from './middleware/logger';

export const app = new Koa();
const router = new Router();

// middlewares
loggerInit(app);

router.get('/*', async (ctx: Koa.Context) => {
	ctx.body = 'Hello World!';
});

app.use(router.routes());
