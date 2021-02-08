import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seedex";

const config = {
  apiKey: "AIzaSyBmakGTVxXfeWOmQJHEebpJDUofeVxle5g",
  authDomain: "netflix-6c089.firebaseapp.com",
  databaseURL: "https://netflix-6c089.firebaseio.com",
  projectId: "netflix-6c089",
  storageBucket: "netflix-6c089.appspot.com",
  messagingSenderId: "252478725260",
  appId: "1:252478725260:web:3b0376f24dc3e255002fa9",
  measurementId: "G-NZ68L1QLQX",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
