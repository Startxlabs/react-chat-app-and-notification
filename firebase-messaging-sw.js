importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


firebase.initializeApp({    
messagingSenderId: "303084247191"
});


const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  console.log('THIS IS PAYLOAD FROM SERVICE WORKER', payload)
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(title, options);
});
