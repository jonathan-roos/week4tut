var express = require('express'); // Used for routing
var cors = require('cors');
var app = express(); // Create express app instance
var http = require('http').Server(app); // Used to provide http functionality 
var path = require('path');

const staticFileDirectory = path.join(__dirname + '../dist/week4tut/index.html')
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json()); // Adds middleware responsible for parsing incoming 
                         // JSON payloads in the request body and converting them into JavaScript objects
app.use(express.static(staticFileDirectory)); // Serve static content for the app from the 'public' dir

require('./routes/api/auth.js').route(app,path);

app.listen(3000, function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at: ' + n +':'+m)
})
