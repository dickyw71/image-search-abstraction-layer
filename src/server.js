// Server side js
const express = require('express');
const findImages = require('./image-search.js');

let app = express();

let requestHistory = [];

// routes
app.get("/api/imagesearch/:searchString", function(request, response) {

    let urlParams = request.params;
    let query = request.query
    console.log(request.params, request.query);

    findImages(urlParams, query)
        .then(results => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(JSON.stringify(results));
        })
        .catch(error => {
            response.writeHead(error.code, {'Content-Type': 'text/plain'});
            response.end(JSON.stringify(error));
        });

    // store search in recent search list
    if(requestHistory.length > 9) {
        requestHistory.shift();
    }
    requestHistory.push({ term: urlParams.searchString, when: new Date(Date.now()).toJSON() })

});

app.get("/api/latest/imagesearch", function(request, response) {

    // return recent search list
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(
      JSON.stringify(requestHistory)
    );  
});

// listen for requests :)
let listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });

