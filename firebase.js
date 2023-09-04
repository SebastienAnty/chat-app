// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfX8KfKqfJWI-oaMo9OxX7sVkgfj6vEUU",
  authDomain: "chat-app-sma.firebaseapp.com",
  projectId: "chat-app-sma",
  storageBucket: "chat-app-sma.appspot.com",
  messagingSenderId: "891836012523",
  appId: "1:891836012523:web:49e902eb9d7ba4350cabae",
  measurementId: "G-9Y61ENBQ7Z",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
