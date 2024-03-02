importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({apiKey: "AIzaSyBqkH99jqhujUJVCy-jREKkm6i7OZ-KVwQ",authDomain: "digitsitich.firebaseapp.com",projectId: "digitsitich",storageBucket: "digitsitich.appspot.com", messagingSenderId: "737410183127", appId: "1:737410183127:web:264216fdc2e5266cce6592"});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) { return self.registration.showNotification(payload.data.title, { body: payload.data.body ? payload.data.body : '', icon: payload.data.icon ? payload.data.icon : '' }); });
