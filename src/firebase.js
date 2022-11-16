import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyB6q_yqP6dxCJaPXLjmrfF2e_-i1o0rr7g",
  authDomain: "n-423-ca.firebaseapp.com",
  projectId: "n-423-ca",
  storageBucket: "n-423-ca.appspot.com",
  messagingSenderId: "884992676981",
  appId: "1:884992676981:web:b62a6fc9a5265cce3b543c",
  measurementId: "G-S8SQZFD9Y8",
});

export const auth = getAuth(firebaseConfig);
export const db = getFirestore(firebaseConfig);
