// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAUf0y8KrliCU_jc633vBp2KJKzDqC3S3E",
  authDomain: "twitter-clone-2e8b4.firebaseapp.com",
  projectId: "twitter-clone-2e8b4",
  storageBucket: "twitter-clone-2e8b4.appspot.com",
  messagingSenderId: "712079302056",
  appId: "1:712079302056:web:1655a1e5db67d42fec519d",
  measurementId: "G-W0Y0458VTQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
