import express from 'express';
const router = express.Router();
import {createTweet, getTweet} from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup, login } from '../../controllers/auth-controller.js';
import {authenticate} from '../../middlewares/authenticate.js';

router.route('/tweets').post(authenticate,createTweet);
router.route('/likes/toggle').post(toggleLike);
router.route('/comments').post(createComment);
router.route('/tweets/:id').get(getTweet);
router.route('/signup').post(signup);
router.route('/login').post(login);

export default router;