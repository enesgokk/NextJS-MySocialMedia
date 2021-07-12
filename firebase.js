import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwXN8u_XSsTj7dIG_JwJ7f3ptznr2cTmw",
  authDomain: "facebook-2-yt-cb00e.firebaseapp.com",
  projectId: "facebook-2-yt-cb00e",
  storageBucket: "facebook-2-yt-cb00e.appspot.com",
  messagingSenderId: "836128322243",
  appId: "1:836128322243:web:31033b2a62738d39e26876"
};

const app= !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig)
 : firebase.app();

const db=app.firestore();
const storage = firebase.storage();

export {db, storage};