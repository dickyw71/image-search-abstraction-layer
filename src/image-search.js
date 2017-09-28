var fetch = require('node-fetch');
const dotenv = require('dotenv').config();

module.exports = function findImages(urlParams) {
    // call image search API and return a Promise
    return new Promise((resolve, reject) => {  
        fetch("https://www.googleapis.com/customsearch/v1?key=" 
            + process.env.CSE_API_KEY + "&cx=" + process.env.CSE_ID + "&q=" + urlParams.searchString + "&searchType=image")
            .then(response => response.json())
            .then(json => resolve(formatSearchResultsObjectArray(json)))
            .catch(ex => reject(ex));
    });
}

// format search results as array of json objects
function formatSearchResultsObjectArray(json) {
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
    //console.log(imageObArr);
    return imageObArr;
}