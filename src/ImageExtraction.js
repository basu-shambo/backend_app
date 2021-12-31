import * as cheerio from 'cheerio';
import request from 'request';
import fs from 'fs';


export const extractImages = (url) =>{
    return new Promise(resolve=>{
        request(url,(error,response,html)=>{
            if(!error && response.statusCode === 200){
                const $ = cheerio.load(html);
                $('img').each((index,img)=>{
                    if(urlRegexMatching($(img).attr('src')) && index < 3){
                        download($(img).attr('src'),'image.svg',()=>{console.log(index+" saved")});
                        // console.log($('img').attr('src'));
                    }
                })
            }
        })
    })
}

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  
  const urlRegexMatching= (link) => {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    return regex.test(link);
}