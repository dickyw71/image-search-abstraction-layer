// Server side js

//import express from 'express';
const dotenv = require('dotenv').config();
const express = require('express');
const findImages = require('./image-search.js');

let app = express();

// routes
app.get("/api/imagesearch/:searchString", function(request, response) {

    let urlParams = request.params;
 
    findImages(urlParams).then(results => {
        //console.log('Image search', results)
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(
          JSON.stringify(results)
        );
    });

    // store search in recent search list
    

});

app.get("/api/latest/imagesearch", function(request, response) {
    // return recent search list

});

// listen for requests :)
let listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });

