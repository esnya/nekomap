import express from 'express';
import { join } from 'path';
import router from './router';
import { express as logger } from './logger';

const VIEWS = join(__dirname, '../../views');

const app = express();
export default app;

app.set('view engine', 'jade');
app.set('views', VIEWS);

app.use(logger);
app.use(router);
