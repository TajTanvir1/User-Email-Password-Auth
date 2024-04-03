// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBG0Cq_VMmz5ogiwqg4HksSyF1Y02wyu0",
  authDomain: "user-email-password-auth-8b1fb.firebaseapp.com",
  projectId: "user-email-password-auth-8b1fb",
  storageBucket: "user-email-password-auth-8b1fb.appspot.com",
  messagingSenderId: "981004611222",
  appId: "1:981004611222:web:cee69ef09407f04254dcb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app;
const auth = getAuth(app);

export default auth;