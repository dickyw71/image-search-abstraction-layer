// Server side js

//import express from 'express';
const express = require('express');
let app = express();


// routes
app.get("/api/imagesearch", function(request, response) {
    // call image search API
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