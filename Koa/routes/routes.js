import koaRouter from 'koa-router';
import { validateHashtag } from '../middlewares';
const router = new koaRouter();
import { home, searchHashtag, defaultRoute } from '../controllers/controller';

router.get('/', home);

router.get('/hashtag/:hashtag', validateHashtag, searchHashtag);

router.all(/.*/, defaultRoute);

export { router };
