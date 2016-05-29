import { static as expressStatic, Router } from 'express';
import { join } from 'path';
import { generate } from '../utilities/id';

const DIST = join(__dirname, '../../dist');

const router = new Router();
export default router;

router.use(expressStatic(DIST));

router.get('/', (req, res) => res.redirect(generate(20)));
router.get(
    '/:id([a-f0-9]{20})',
    ({ params }, res) => res.render('room', { id: params })
);
