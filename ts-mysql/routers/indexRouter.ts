import * as express from 'express';
const router: express.Router = express.Router();

router.get('/', (request, response) => response.end('GET "/"'));

export default router;
// module.exports = router;