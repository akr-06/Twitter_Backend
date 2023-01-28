import Hashtag from '../models/hashtags';

class HashtagRepository {

    async create(){
        try {
            
        } catch (error) {
            
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            
        } catch (error) {
            
        }
    }

    async destroy(){
        try {
            
        } catch (error) {
            
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            })
            return tags;
        } catch (error) {
            
        }
    }

}

export default HashtagRepository;