// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFEKGgz1nCQQA4RDM9ge416wbcosV_T4",
  authDomain: "fir-email-password-2063a.firebaseapp.com",
  projectId: "fir-email-password-2063a",
  storageBucket: "fir-email-password-2063a.appspot.com",
  messagingSenderId: "898184037666",
  appId: "1:898184037666:web:591e928989e2aa5559517b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;