// Server side js

//import express from 'express';
const dotenv = require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');


let app = express();



// routes
app.get("/api/imagesearch/:searchString", function(request, response) {

    let urlParams = request.params;
    console.log(urlParams, process.env.CSE_API_KEY);

    // call image search API
    fetch("https://www.googleapis.com/customsearch/v1?key=" + process.env.CSE_API_KEY + "&cx=" + process.env.CSE_ID +  "&q=" + urlParams.searchString + "&searchType=image")
        .then(response => response.json())
        .then(json => console.log(json));
    // format results as array of json objects
    // store search in recent search list
    

});

app.get("/api/latest/magesearch", function(request, response) {
    // return recent search list

});

// listen for requests :)
let listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });