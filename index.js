import { extractLinks } from "./src/linkExtraction.js";
import { extractContent } from "./src/contentExtraction.js";
import { extractImages } from "./src/ImageExtraction.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import linkModel from "./models/linkModel.js";
import contentModel from "./models/contentModel.js";

dotenv.config();


const url = "https://indianexpress.com/"
const getAll = async (url ) =>{
    const linkResponse = await extractLinks(url);
    extractContent(url);
    extractImages(url);
}


const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(async()=>{
    console.log(mongoose.connection.readyState===1?'connected to mongodb':'not connected to mongodb ');
    const linkResponse = await linkModel.deleteMany({});
    console.log(linkResponse.deletedCount+" have been been deleted from links");
    const contentResponse = await contentModel.deleteMany({});
    console.log(contentResponse.deletedCount+" have been been deleted from contents");
    getAll(url);
}).catch((err)=>{
    console.log(err)
})