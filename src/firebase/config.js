import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCmaWK06tugUvaSMM0ApidONhjJ4EQERbU",
  authDomain: "smashdeals-15d7a.firebaseapp.com",
  projectId: "smashdeals-15d7a",
  storageBucket: "smashdeals-15d7a.appspot.com",
  messagingSenderId: "190343591690",
  appId: "1:190343591690:web:61e357da24f39af66a2cf3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
