import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUf0y8KrliCU_jc633vBp2KJKzDqC3S3E",
  authDomain: "twitter-clone-2e8b4.firebaseapp.com",
  projectId: "twitter-clone-2e8b4",
  storageBucket: "twitter-clone-2e8b4.appspot.com",
  messagingSenderId: "712079302056",
  appId: "1:712079302056:web:3b32d8d4bd2066c9ec519d",
  measurementId: "G-Z538V2BMTR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
