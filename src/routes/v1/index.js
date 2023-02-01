import express from 'express';
const router = express.Router();
import {createTweet, getTweet} from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';

router.route('/tweets').post(createTweet);
router.route('/likes/toggle',toggleLike);
router.route('/comments',createComment);
router.route('/tweets/:id',getTweet);

export default router;