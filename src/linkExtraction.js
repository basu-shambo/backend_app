import linkModel from "../models/linkModel.js";
import request from 'request';
import * as cheerio from 'cheerio'


export const extractLinks = (url) =>{
    return new Promise(resolve =>{
        request(url,(error,response,html)=>{
            if(!error && response.statusCode === 200){
                let i=0;
                const $ = cheerio.load(html);
                let links = []
                $('a').each((index,link)=>{
                    let linkUrl = $(link).attr('href');
                    if(urlRegexMatchindng(linkUrl)) links.push(linkUrl);
                    const newUrl = new linkModel({link:linkUrl});
                    newUrl.save(()=>i++);
                })
                console.log(i+" links saved")
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