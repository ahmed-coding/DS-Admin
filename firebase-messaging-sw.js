importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({apiKey: "AIzaSyBvAGjA-vsWEB9GNz3bVC2FDDvSgY-wSYM",authDomain: "digitstitch-ded04.firebaseapp.com",projectId: "digitstitch-ded04",storageBucket: "digitstitch-ded04.appspot.com", messagingSenderId: "629310485336", appId: "1:629310485336:web:61757130eb1bf8e6dc6b2d"});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) { return self.registration.showNotification(payload.data.title, { body: payload.data.body ? payload.data.body : '', icon: payload.data.icon ? payload.data.icon : '' }); });
