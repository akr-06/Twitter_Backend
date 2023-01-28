import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        index : true
    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ]
}, {timestamps:true})

module.exports = mongoose.model('Hashtag', hashtagSchema);