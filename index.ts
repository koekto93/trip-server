import { app } from './app';
import * as config from 'config';

const port = config.get('server.port');

app.listen(port, () => {
	console.log(`App is running on ${port}`);
});
