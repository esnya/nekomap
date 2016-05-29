import config from 'config';
import app from './app';
import { system } from './logger';

app.listen(config.get('listen'), function onListen() {
    system.info('Listening on ', this.address());
});
