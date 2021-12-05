import firebase from 'firebase';

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
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};