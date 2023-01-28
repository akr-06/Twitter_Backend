import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250, 'tweet cannot be more than 250 characters']
    }

},{timestapms : true});

export default mongoose.model('Tweet', tweetSchema);