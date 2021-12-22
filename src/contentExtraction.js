import contentModel from '../models/contentModel.js';
import * as cheerio from 'cheerio';
import request from 'request';

export const extractContent = (url) =>{
    return new Promise(resolve =>{
        if(!error && response.statusCode === 200){
            const $ = cheerio.load(html);
            let contents = []
            $('p').each((index,paragraph)=>{
                //save to the $(paragraph).test()
            })
        }
    })
}