import linkModel from "../models/linkModel.js";

export const extractLinks = (mongoClient,$)=>{
    let links = [];
    $('a').each((index,link)=>{
        let url = $(link).attr('href');
        if(urlRegexMatchindng(url)) links.push($);
    })
    return links;
}


const urlRegexMatchindng= (link) => {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    return regex.test(link);

}