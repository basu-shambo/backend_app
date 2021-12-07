import * as cheerio  from "cheerio";
import request from "request";

import { extractLinks } from "./src/linkExtraction.js";


const url = "https://indianexpress.com/"
request(url,(error,response,html) => {
    if(!error && response.statusCode === 200){
        const $  = cheerio.load(html);
        // const links = $('a');
        // const content = $('p');

        // // $(links).each((index,link)=>{
        // //     console.log($(link).attr('href'));
        // //     console.log("\n");
        // // })
        // // console.log(content.text());
        // $(content).each((index,paragraph)=>{
        //     console.log($(paragraph).text());
        //     console.log('\n');
        // })
        let links = extractLinks("a",$);
        console.log(links);
        
        
    }
    
})

const extractContent = (html)=>{

}