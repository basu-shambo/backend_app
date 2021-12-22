import { extractLinks } from "./src/linkExtraction.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import linkModel from "./models/linkModel.js";
import contentModel from "./models/contentModel.js";

dotenv.config();


const url = "https://indianexpress.com/"
const getAll = async (url ) =>{
    const response = await extractLinks(url);
    // console.log(response);
}


const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
    console.log(mongoose.connection.readyState===1?'connected to mongodb':'not connected to mongodb ');
    linkModel.deleteMany({},()=>console.log("Links Collection Emptied"));
    contentModel.deleteMany({},()=>console.log("Links Collection Emptied"));
    getAll(url);
}).catch((err)=>{
    console.log(err)
})



