// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDCslnqYB9YYNjcY_t9EIEX-HiiWtN-A",
  authDomain: "job-portal-25ed6.firebaseapp.com",
  projectId: "job-portal-25ed6",
  storageBucket: "job-portal-25ed6.firebasestorage.app",
  messagingSenderId: "567502374426",
  appId: "1:567502374426:web:59d7295e3c887f0573f3a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
