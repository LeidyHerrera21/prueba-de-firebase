// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
import { getFirestore,
    collection,
    doc, 
    addDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    deleteDoc 
    } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
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
export const db = getFirestore();

// funcion del CRUD

export const createTask =  (title, description, userName, date, time) =>  addDoc(collection(db, "tasks"), {title, description, userName, date, time})

export const getTask = id => getDoc(doc(db, "tasks", id));

export const updateTack = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const onGetTask = (caliback) => onSnapshot(collection (db, "tasks"), caliback);

export const deleteTask = id =>  deleteDoc(doc(db, "tasks", id));