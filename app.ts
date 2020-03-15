import * as Koa from 'koa';
import * as Router from 'koa-router';
import { init as loggerInit } from './middleware/logger';

export const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
	ctx.body = 'Hello World!';
});

app.use(router.routes());
