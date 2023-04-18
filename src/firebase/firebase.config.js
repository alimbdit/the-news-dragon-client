// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMCDrMXwZ7946KOwgsLGx9KKooPrFwuA",
  authDomain: "the-news-dragon-441f2.firebaseapp.com",
  projectId: "the-news-dragon-441f2",
  storageBucket: "the-news-dragon-441f2.appspot.com",
  messagingSenderId: "198385547354",
  appId: "1:198385547354:web:ed7b623967f29df7250063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;