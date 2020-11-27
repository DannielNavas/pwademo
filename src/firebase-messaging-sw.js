// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDG4OY5kxBg145wGx6qCshcd_mIz5Pup1c",
  authDomain: "demopwa-effbe.firebaseapp.com",
  databaseURL: "https://demopwa-effbe.firebaseio.com",
  projectId: "demopwa-effbe",
  storageBucket: "demopwa-effbe.appspot.com",
  messagingSenderId: "551562652162",
  appId: "1:551562652162:web:81a95138e4bc4e850d151b",
  measurementId: "G-20K0D111LD",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
