'use strict';

const firebase = require('firebase');
const firebaseApp = firebase.initializeApp({
  serviceAccount: __dirname + '/../config/serviceAccountCredentials.json',
  databaseURL: 'https://hdwaf-development.firebaseio.com',
});

module.exports = firebase.database().ref();
