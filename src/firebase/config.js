import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUT02UAfPfOX1p6btNZ9ZvVgo7yih4_Rk",
  authDomain: "blog-e7468.firebaseapp.com",
  projectId: "blog-e7468",
  storageBucket: "blog-e7468.appspot.com",
  messagingSenderId: "954243099902",
  appId: "1:954243099902:web:c5f60331923a2f41efc9af"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db, app};