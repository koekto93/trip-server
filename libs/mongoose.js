import * as mongoose from 'mongoose';
import * as beautifyUnique from 'mongoose-beautiful-unique-validation';
import * as config from 'config';

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.plugin(beautifyUnique);
mongoose.Promise = global.Promise;
mongoose.connect(config.get('mongodb.uri'));

module.exports = mongoose;
