import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    }
});

export default mongoose.model('content',contentSchema,'contents');