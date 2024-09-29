// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FirebaseOptions } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBwJt0xkWwi6W9qZRvbarVNar3sMQAlWUg",
  authDomain: "taskhub-94059.firebaseapp.com",
  projectId: "taskhub-94059",
  storageBucket: "taskhub-94059.appspot.com",
  messagingSenderId: "391320311831",
  appId: "1:391320311831:web:58ec6eaad156a4dad6e452",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Connect to your Firestore database
export const firestoreDb = getFirestore(firebaseApp);
// Connect to Firebase auth
export const firebaseAuth = getAuth(firebaseApp);
