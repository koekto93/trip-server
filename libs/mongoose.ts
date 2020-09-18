import mongoose from 'mongoose';
// @ts-ignore
import beautifyUnique from 'mongoose-beautiful-unique-validation';
import config from 'config';

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.plugin(beautifyUnique);
mongoose.Promise = global.Promise;
mongoose.connect(config.get('mongodb.uri'));

module.exports = mongoose;
