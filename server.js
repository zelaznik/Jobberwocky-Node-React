var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

var PORT = process.env.PORT || 8080;

// serve our static stuff like index.css and bundled js files.
app.use('/assets/', express.static(path.join(__dirname,"assets")));
app.use('/js/', express.static(path.join(__dirname,"js")));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});