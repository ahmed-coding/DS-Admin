importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({apiKey: "AIzaSyDJ7tVIMqf_J19tmLq0MFvbOi9JvNC79A4",authDomain: "digitstitch-ded04.firebaseapp.com",projectId: "digitstitch-app",storageBucket: "digitstitch-app.appspot.com", messagingSenderId: "905233487637", appId: "1:905233487637:android:41f32a2ad34aae05bebb1c"});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) { return self.registration.showNotification(payload.data.title, { body: payload.data.body ? payload.data.body : '', icon: payload.data.icon ? payload.data.icon : '' }); });
