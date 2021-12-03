import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    link : {
        type:String,
        required: true
    }
});
export default mongoose.model('link',linkSchema,'links');