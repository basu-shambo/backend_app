import linkModel from "../models/linkModel.js";
import request from 'request';
import * as cheerio from 'cheerio'


export const extractLinks = (url) =>{
    return new Promise(resolve =>{
        request(url,async(error,response,html)=>{
            if(!error && response.statusCode === 200){
                const $ = cheerio.load(html);
                let links = []
                await Promise.all($('a').map(async(index,link)=>{
                    let linkUrl = $(link).attr('href');
                    if(urlRegexMatchindng(linkUrl)){
                        const newUrl = new linkModel({link:linkUrl});
                        const responseURL = await newUrl.save();
                        if(JSON.stringify(newUrl)===JSON.stringify(responseURL)){
                            links.push(linkUrl);
                        }
                    }   
                }))
                resolve(links);
            }
            resolve([]);
        })
    })
}

const urlRegexMatchindng= (link) => {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    return regex.test(link);
}