// Importing the functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBre2BvNVK7RpWBRSlJTwCIMjNnWQUO3sE",
  authDomain: "wedding-wizard.firebaseapp.com",
  projectId: "wedding-wizard",
  storageBucket: "wedding-wizard.appspot.com",
  messagingSenderId: "869527672174",
  appId: "1:869527672174:web:59b4af79ba4fdff8601d7f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
