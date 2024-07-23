// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDspMsX7zfNeBxjiRqcsx5YQUPVoEtHvoI",
  authDomain: "food-recipe-website-d3a82.firebaseapp.com",
  projectId: "food-recipe-website-d3a82",
  storageBucket: "food-recipe-website-d3a82.appspot.com",
  messagingSenderId: "1010763919043",
  appId: "1:1010763919043:web:60346965f6c923f0073c76",
  measurementId: "G-Y8P1VTWRL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);