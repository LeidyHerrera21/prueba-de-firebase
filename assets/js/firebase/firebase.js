// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDicKEOAHicVyEnrxnub5lvnE91QRyOf88",
  authDomain: "prueba-firebase-b8f2a.firebaseapp.com",
  projectId: "prueba-firebase-b8f2a",
  storageBucket: "prueba-firebase-b8f2a.appspot.com",
  messagingSenderId: "1007963953724",
  appId: "1:1007963953724:web:f36bee17cc912e8c110139",
  measurementId: "G-E3H44GT8LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);