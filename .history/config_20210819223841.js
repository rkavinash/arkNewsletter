const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDuMUSvXtjWBzFkrRr8zZ_5nsYlL6pKfbw",
    authDomain: "arknewslettersubscribe.firebaseapp.com",
    projectId: "arknewslettersubscribe",
    storageBucket: "arknewslettersubscribe.appspot.com",
    messagingSenderId: "322832371015",
    appId: "1:322832371015:web:2e72eac9622d9f28271062"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const SubscribedUsers = db.collection('SubscribedUsers');

  module.exports = SubscribedUsers;