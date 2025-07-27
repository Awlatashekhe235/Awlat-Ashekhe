import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbPNwMVURF7amK0nEp7Ggadcfc25t_6uM",
  authDomain: "awlatashekh.firebaseapp.com",
  projectId: "awlatashekh",
  storageBucket: "awlatashekh.firebasestorage.app",
  messagingSenderId: "728578889403",
  appId: "1:728578889403:web:c73a6f783b217ba5303b9e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
