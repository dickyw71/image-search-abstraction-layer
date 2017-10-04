var fetch = require('node-fetch');
const dotenv = require('dotenv').config();

module.exports = function findImages(urlParams, query) {
    // call image search API and return a Promise
    return new Promise((resolve, reject) => {  
        let offset = Number.isInteger(parseInt(query.offset)) ? query.offset : '1';
        fetch("https://www.googleapis.com/customsearch/v1?key=" 
            + process.env.CSE_API_KEY + "&cx=" + process.env.CSE_ID + "&q=" + urlParams.searchString + "&searchType=image" + "&start=" + offset)
            .then(response => response.json())
            .then(json => resolve(formatSearchResultsObjectArray(json)))
            .catch(ex => reject(ex));
    });
}

// format search results as array of json objects
function formatSearchResultsObjectArray(json) {
    console.log(json);
    let imageObArr = [];
    if(json.items !== undefined) {
        imageObArr = json.items.map(item => {
            return (
                { 
                    imageUrl: item.link, 
                    altText: item.title,
                    parentPage: item.image.contextLink,
                    description: item.snippet,
                    thumbnail: {
                        thumbnailUrl: item.image.thumbnailLink,
                        thunbnailHeight: item.image.thunbnailHeight,
                        thumbnailWidth: item.image.thumbnailWidth
                    }
                }
            )
        })
    }
    // else {
    //     throw 'No result items returned.' 
    // }
    //console.log(imageObArr);
    return imageObArr;
}