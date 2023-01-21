// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgqFpCmUtcBItH4Z33xfXPga5lcVjpTo0",
  authDomain: "omoma-ac2d1.firebaseapp.com",
  projectId: "omoma-ac2d1",
  storageBucket: "omoma-ac2d1.appspot.com",
  messagingSenderId: "270316552574",
  appId: "1:270316552574:web:0b1c653f5b0b36e1f0732f",
  measurementId: "G-Z77THFX6B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const storage = getStorage(app)