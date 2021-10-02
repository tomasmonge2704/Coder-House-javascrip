// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBALjRbTJOivCoEqq-hBHbiwSSVwPKyScM",
  authDomain: "proyecto-final-javascrip-33306.firebaseapp.com",
  databaseURL: "https://proyecto-final-javascrip-33306-default-rtdb.firebaseio.com",
  projectId: "proyecto-final-javascrip-33306",
  storageBucket: "proyecto-final-javascrip-33306.appspot.com",
  messagingSenderId: "939760314108",
  appId: "1:939760314108:web:3ba09133fe352ac2889979",
  measurementId: "G-YL7P4PBGGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const analytics = getAnalytics(app);

export {app, database, ref, set};