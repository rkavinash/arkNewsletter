const express = require('express');
const app = express();
const SubscribedUsers = require('./config');

app.use(express.json());
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('SERVER STARTED AT PORT 3000\n');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});
