import mongoose, { mongo } from "mongoose";

const commetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment']
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    }
},{timestamps : true});

export default mongoose.model('Comment', commetSchema);
