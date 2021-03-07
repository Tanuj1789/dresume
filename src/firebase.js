// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
require('firebase/app')
const app= firebase.initializeApp({
    apiKey: "AIzaSyASPodOpvjSVV0x5mWJBJZk0Ou0hxM0OuE",
    authDomain: "reveiwers.firebaseapp.com",
    projectId: "reveiwers",
    storageBucket: "reveiwers.appspot.com",
    messagingSenderId: "796394826649",
    appId: "1:796394826649:web:a811543346b136c77e4108"
});
export const db= app.database();
export const names=db.ref('name');
export const auth = firebase.auth()

