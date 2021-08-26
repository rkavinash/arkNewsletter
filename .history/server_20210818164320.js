const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, function() {
    console.log('SERVER STARTED AT PORT 3000\n');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});
