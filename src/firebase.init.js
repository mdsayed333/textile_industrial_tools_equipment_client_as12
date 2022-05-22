// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEk2K1GhtKv6YY6CkT4qFJzFkJ3kYvYA",
  authDomain: "industrial-tools-and-equipment.firebaseapp.com",
  projectId: "industrial-tools-and-equipment",
  storageBucket: "industrial-tools-and-equipment.appspot.com",
  messagingSenderId: "458336844803",
  appId: "1:458336844803:web:56348953fc74265dfea236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

