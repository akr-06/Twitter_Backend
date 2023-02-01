import express from 'express';
const router = express.Router();
import {createTweet} from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';

router.route('/tweets').post(createTweet);
router.route('/likes/toggle',toggleLike);

export default router;