import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as config from 'config';
//import config from 'config';
process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';

const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);
console.log(config.get('secret'));

console.log('Server running on port 3000');
