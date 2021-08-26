const express = require('express');
const app = express();

const firebase = require('firebase');
const SubscribedUsers = require('./config');

app.use(express.json());
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('SERVER STARTED AT PORT 3000\n');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/success', function(req, res) {
    res.sendFile(__dirname + '/success.html');
});

app.get('/failure', function(req, res) {
    res.sendFile(__dirname + '/failure.html');
});

app.post('/subscribe', async(req, res)  => {
    const data = req.body;
    console.log('subscribe data is = ', data);

    const userRef = firebase.firestore().collection('SubscribedUsers');

    var emailFound = false;
    const nameQueryRes = await userRef.where('email', '==', data.email).get();
    nameQueryRes.forEach(d => {
        emailFound = true;
    });

    if(emailFound) {
        console.log('email already exists');
        res.send('{msg:"Email Already Exists!!"}');
        res.status(400).send('exist 1')
    } else {
        console.log('email not present');
        await SubscribedUsers.add(data);
        res.send('{msg:"Subscribed successfully!!"}');
        res.status(200).send('Success 1')
    }

});


