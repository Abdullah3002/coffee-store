// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9tIa3VU741J612n-C5Jri7OoRfqfUX4g",
  authDomain: "coffee-store-50f3b.firebaseapp.com",
  projectId: "coffee-store-50f3b",
  storageBucket: "coffee-store-50f3b.firebasestorage.app",
  messagingSenderId: "740410854585",
  appId: "1:740410854585:web:032902e24bbc0ed9ec5f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;