// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyDkTs-8_gwtJnbWi7bg9IYsy2AI8ZJt1Ns',
    authDomain: 'lavaderosonico.firebaseapp.com',
    databaseURL: 'https://lavaderosonico.firebaseio.com',
    projectId: 'lavaderosonico',
    storageBucket: 'lavaderosonico.appspot.com',
    messagingSenderId: '1003682945550',
    appId: '1:1003682945550:web:7d6f0b7b744f8f19e1fa5f',
    measurementId: 'G-6E5656E349'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();