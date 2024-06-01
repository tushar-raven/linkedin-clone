import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtkL0JL0svwivATOPFGkX9B8tGq6X8Nb4",
  authDomain: "linkedin-clone-86f84.firebaseapp.com",
  projectId: "linkedin-clone-86f84",
  storageBucket: "linkedin-clone-86f84.appspot.com",
  messagingSenderId: "135927085103",
  appId: "1:135927085103:web:630cb2209cb1bb51176eda",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
