var path = require("path");
// express package 
const express = require('express');
 // new instance of package
const app = new express();
 
app.use(express.static('public'));
 
// Routes 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

app.get('/views/about', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/about.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});