import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCkCvhs1xtqaXsKjHQtl0ma_BTpXjI8Bxk",
    authDomain: "bedtime-stories-app-fd5f4.firebaseapp.com",
    projectId: "bedtime-stories-app-fd5f4",
    storageBucket: "bedtime-stories-app-fd5f4.appspot.com",
    messagingSenderId: "244891281628",
    appId: "1:244891281628:web:8d07b7192547690a5dec19"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();