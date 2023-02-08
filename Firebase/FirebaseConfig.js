import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBqBdmKTZeWvnLqrCEcWOAnAS7VOyY8h8c",
  authDomain: "foodapp2-8d277.firebaseapp.com",
  projectId: "foodapp2-8d277",
  storageBucket: "foodapp2-8d277.appspot.com",
  messagingSenderId: "178391411107",
  appId: "1:178391411107:web:334c912852e24f08f55216"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export {firebase};
