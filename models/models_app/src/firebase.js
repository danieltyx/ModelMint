// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHKY82QTja95nPB-ACS2syUx6FCZg1w1U",
  authDomain: "modelgpt-4c6ec.firebaseapp.com",
  projectId: "modelgpt-4c6ec",
  storageBucket: "modelgpt-4c6ec.appspot.com",
  messagingSenderId: "715890973366",
  appId: "1:715890973366:web:4a311865159696a1c0a417",
  measurementId: "G-JVV7D2L7MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);