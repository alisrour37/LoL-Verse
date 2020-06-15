import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDMeAfP2QtvuJ6ua97nL9f2tMPgps_Si8Y",
    authDomain: "lolversefinal-184a9.firebaseapp.com",
    databaseURL: "https://lolversefinal-184a9.firebaseio.com",
    projectId: "lolversefinal-184a9",
    storageBucket: "lolversefinal-184a9.appspot.com",
    messagingSenderId: "954564064063",
    appId: "1:954564064063:web:8ba6d09749b55f2369598a"
  };
firebase.initializeApp(config);


export default firebase;