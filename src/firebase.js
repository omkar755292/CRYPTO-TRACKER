import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBODkMpjVEjbXqzGjqzmXPQ_ytl_jgiHwU",
  authDomain: "analog-bay-420905.firebaseapp.com",
  projectId: "analog-bay-420905",
  storageBucket: "analog-bay-420905.appspot.com",
  messagingSenderId: "488107729908",
  appId: "1:488107729908:web:c802c92dafd6963e338fa1",
  measurementId: "G-4YXJDG4RMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
