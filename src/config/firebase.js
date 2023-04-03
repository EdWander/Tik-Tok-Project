// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBBl_lqFqvtQFEiw9kB9OnKe9-ttkII_ok",
  authDomain: "tiktok---jornada-783d1.firebaseapp.com",
  projectId: "tiktok---jornada-783d1",
  storageBucket: "tiktok---jornada-783d1.appspot.com",
  messagingSenderId: "128610531385",
  appId: "1:128610531385:web:ff9ac047a80ff300beb5e8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
