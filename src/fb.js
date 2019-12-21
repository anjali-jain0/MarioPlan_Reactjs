import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyC_veePqwMiktSJyhpZsAnElzCnRI8IoB4",
    authDomain: "practice-marioplan.firebaseapp.com",
    databaseURL: "https://practice-marioplan.firebaseio.com",
    projectId: "practice-marioplan",
    storageBucket: "practice-marioplan.appspot.com",
    messagingSenderId: "854341255159"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true});

export default firebase;