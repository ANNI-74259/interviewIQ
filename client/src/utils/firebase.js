
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-b23f4.firebaseapp.com",
  projectId: "fir-b23f4",
  storageBucket: "fir-b23f4.firebasestorage.app",
  messagingSenderId: "799702033732",
  appId: "1:799702033732:web:1f99e31756e28c9f302311"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}