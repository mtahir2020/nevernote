import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0LBnXcW_bi8KrLL6FtRX_VqpLsOpbuI4",
  authDomain: "nevernote-e79ed.firebaseapp.com",
  projectId: "nevernote-e79ed",
  storageBucket: "nevernote-e79ed.appspot.com",
  messagingSenderId: "969721092851",
  appId: "1:969721092851:web:5931f8cc93cf0840573586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
