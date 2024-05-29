// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9d0_TFSy9VXXSvzRRFygIMzzI24TAkwA",
  authDomain: "cata-outlet.firebaseapp.com",
  projectId: "cata-outlet",
  storageBucket: "cata-outlet.appspot.com",
  messagingSenderId: "716703739049",
  appId: "1:716703739049:web:268aed0aad73ff0f8b4db8",
  measurementId: "G-QGT4N6LZ1B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);