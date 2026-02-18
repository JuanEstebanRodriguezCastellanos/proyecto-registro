import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgRfBuE6vlGJAanJ8wVjzRmgrpUR84O7Q",
  authDomain: "proyecto-registro-dc838.firebaseapp.com",
  projectId: "proyecto-registro-dc838",
  storageBucket: "proyecto-registro-dc838.firebasestorage.app",
  messagingSenderId: "520205430318",
  appId: "1:520205430318:web:60c3115022115f76dc79bf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);