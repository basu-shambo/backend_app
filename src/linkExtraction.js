import linkModel from "../models/linkModel.js";

export const extractLinks = (mongoClient,$)=>{
    let links = [];
    let i=0
    $('a').each((index,link)=>{
        console.log(link.hostName)
    })
    return links;
}

function link_is_external(link_element) {
    return (link_element.host !== global.location.host);
}