import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHUnRTbgAu6PtsYV4PGReYUPDNY-r6oos",
  authDomain: "estructuras-ffe94.firebaseapp.com",
  projectId: "estructuras-ffe94",
  storageBucket: "estructuras-ffe94.firebasestorage.app",
  messagingSenderId: "828033638719",
  appId: "1:828033638719:web:e133c76d847e89828a738a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};