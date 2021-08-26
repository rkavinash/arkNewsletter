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

    const usersRef = db.collection('users').doc('email')

    usersRef.get()
    .then((docSnapshot) => {
        if (docSnapshot.exists) {
        usersRef.onSnapshot((doc) => {
            // do stuff with the data
        });
        } else {
        usersRef.set({...}) // create the document
        }
    });

    // await SubscribedUsers.add(data);
    // res.send('{msg:"Subscribed successfully!!"}');
});


