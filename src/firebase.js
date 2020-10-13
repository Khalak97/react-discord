import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1qQg2EyEsGFckMyxKDZESZ5gOnsKopAs",
  authDomain: "react-discord.firebaseapp.com",
  databaseURL: "https://react-discord.firebaseio.com",
  projectId: "react-discord",
  storageBucket: "react-discord.appspot.com",
  messagingSenderId: "1074536859914",
  appId: "1:1074536859914:web:f21f8159dbe700365992f3",
  measurementId: "G-6DRB429Y0F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
