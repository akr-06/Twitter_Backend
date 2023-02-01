import like from "../models/like.js";
import {LikeRepository, TweetRepository} from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        try {
            if(modelType=='Tweet'){
                var likeable = await this.tweetRepository.find(modelId);

            }
            else if(modelType=='Comment'){

            }

            const exists = await this.likeRepository.findByUserAndLikeable({
                user : userId,
                onModel : modelType,
                likeable : modelId
            });

            if(exists){
                likeable.likes.pull(exists.id);
                await likeable.save();
                await exists.remove();
                var isRemoved = true;
            }
            else{
                const newLike = await this.likeRepository.create({
                    user : userId,
                    onModel : modelType,
                    likeable : modelId
                });

                likeable.likes.push(newLike);
                await likeable.save();
                var isRemoved = false;
            }
            return isRemoved;

        } catch (error) {
            throw error;
        }
    }
}