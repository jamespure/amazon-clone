import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1ix0TQodVGnDUBriEDIlQ210_PNBByFI",
  authDomain: "clone-59e63.firebaseapp.com",
  projectId: "clone-59e63",
  storageBucket: "clone-59e63.appspot.com",
  messagingSenderId: "729049248155",
  appId: "1:729049248155:web:3d2813aad7ba156e2e313e",
  measurementId: "G-8MMS3TZ5KZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth();

export { db, auth };
