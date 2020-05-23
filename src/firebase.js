import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "contact-5b423.firebaseapp.com",
    databaseURL: "https://contact-5b423.firebaseio.com",
    projectId: "contact-5b423",
    storageBucket: "contact-5b423.appspot.com",
    messagingSenderId: "690627206171",
    appId: "1:690627206171:web:f92370e354696d42562cbe",
    measurementId: "G-BFYPP8GWK1"
  };
  if (!firebase.apps.length){
  
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase