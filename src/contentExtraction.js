import contentModel from '../models/contentModel.js';
import * as cheerio from 'cheerio';
import request from 'request';

export const extractContent = (url) =>{
    return new Promise(resolve=>{
        request(url,async(error,response,html)=>{
            if(!error && response.statusCode === 200){
                const $ = cheerio.load(html);
                await Promise.all($('p').map(async(index,paragraph)=>{
                    const content = $(paragraph).text();
                    if(content){
                        const newContent = new contentModel({content:$(paragraph).text()})
                        const responseContent = await newContent.save();
                    }
                    
                }))
            }
        })
    })
}