// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYPj3BIoaBXshKk-rBueRKlckxJN7Gc-4",
  authDomain: "fitness-58512.firebaseapp.com",
  projectId: "fitness-58512",
  storageBucket: "fitness-58512.appspot.com",
  messagingSenderId: "934255709005",
  appId: "1:934255709005:web:c89a5e8167ca2c97e20504",
  measurementId: "G-J3W6ZEEVQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);