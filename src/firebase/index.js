// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlfV5mZjvRzxVRqM1NMeJn7L9UkU9yARw",
    authDomain: "update-45a86.firebaseapp.com",
    databaseURL: "https://update-45a86-default-rtdb.firebaseio.com",
    projectId: "update-45a86",
    storageBucket: "update-45a86.appspot.com",
    messagingSenderId: "298374133769",
    appId: "1:298374133769:web:dbf9a71e61d5dcf5c060d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }