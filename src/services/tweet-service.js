
import {TweetRepository, HashtagRepository} from '../repository/index'

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){

        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.tolowercase().map((tag)=>{
            return tag.substring(1);
        })

        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        alreadyPresentTags = alreadyPresentTags.map((tag)=> tag.title);

        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {
                title : tags,
                tweets : [tweet.id]
            }
        })

        await this.HashtagRepository.bulkCreate(newTags);

        alreadyPresentTags.forEach((tag)=> {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        return tweet;
    }
}

export default TweetService;