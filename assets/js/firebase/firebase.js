// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicKEOAHicVyEnrxnub5lvnE91QRyOf88",
  authDomain: "prueba-firebase-b8f2a.firebaseapp.com",
  projectId: "prueba-firebase-b8f2a",
  storageBucket: "prueba-firebase-b8f2a.appspot.com",
  messagingSenderId: "1007963953724",
  appId: "1:1007963953724:web:f36bee17cc912e8c110139",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = firebase.firebase();
