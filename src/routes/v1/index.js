import express from 'express';
const router = express.Router();
import {createTweet} from '../../controllers/tweet-controller.js';


router.route('/tweets').post(createTweet);

export default router;