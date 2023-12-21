// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZpDZ6DZoZIZrVsStiMLnT8OxixYQp4EA",
    authDomain: "fandok-eff65.firebaseapp.com",
    projectId: "fandok-eff65",
    storageBucket: "fandok-eff65.appspot.com",
    messagingSenderId: "264314338688",
    appId: "1:264314338688:web:66ec4018aea44c3009d565",
    measurementId: "G-RQP6N9E7MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export {auth, db};