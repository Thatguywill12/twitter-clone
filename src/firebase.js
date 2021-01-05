import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBo3MEJW2R4rkO3_ZMxdT_G7N8p6j2hjd4",
  authDomain: "twitter-clone-1-105cc.firebaseapp.com",
  databaseURL: "https://twitter-clone-1-105cc.firebaseio.com",
  projectId: "twitter-clone-1-105cc",
  storageBucket: "twitter-clone-1-105cc.appspot.com",
  messagingSenderId: "721673662801",
  appId: "1:721673662801:web:fe0d774818833a3aae6370",
  measurementId: "G-RZ3C58W5LP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;