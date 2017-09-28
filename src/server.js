// Server side js

//import express from 'express';
const dotenv = require('dotenv').config();
const express = require('express');
const findImages = require('./image-search.js');

let app = express();

// routes
app.get("/api/imagesearch/:searchString", function(request, response) {

    let urlParams = request.params;
    console.log(urlParams, process.env.CSE_API_KEY);

    findImages(urlParams);
    // format results as array of json objects
    // store search in recent search list
    

});

app.get("/api/latest/imagesearch", function(request, response) {
    // return recent search list

});

// listen for requests :)
let listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });

