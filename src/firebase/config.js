import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXVPsbyLhM6D1EhnfTH05yeYPZCqyTNuU',
  authDomain: 'employer-branding-app.firebaseapp.com',
  databaseURL: 'https://employer-branding-app.firebaseio.com',
  projectId: 'employer-branding-app',
  storageBucket: 'employer-branding-app.appspot.com',
  messagingSenderId: '697230920771',
  appId: '1:697230920771:android:b6ce0d8773cd1acba6d8f6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
