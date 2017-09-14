// Server side js

//import express from 'express';
const express = require('express');
const fetch = require('node-fetch');

let app = express();


// routes
app.get("/api/imagesearch/:searchString", function(request, response) {

    let urlParams = request.params;
    console.log(urlParams);

    // call image search API
    fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyD82uWISxvyGw_T-zRx6xTCLkXS_wBVzvo&cx=015311179725308767903:ghrfxowvp_0&q=" + urlParams.searchString + "&searchType=image")
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