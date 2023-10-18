// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC-lCApqUWciAe3lBGsF7uXhlOpDIRQy0",
  authDomain: "bd-shop-b06a9.firebaseapp.com",
  projectId: "bd-shop-b06a9",
  storageBucket: "bd-shop-b06a9.appspot.com",
  messagingSenderId: "540657992539",
  appId: "1:540657992539:web:b347b1ab029b13686cd07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth