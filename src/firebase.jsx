// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCgyrDZgB5L0nPGvPIs8ISTHIS1Af1_M9s",
  authDomain: "mama-guardian-app.firebaseapp.com",
  projectId: "mama-guardian-app",
  storageBucket: "mama-guardian-app.firebasestorage.app",
  messagingSenderId: "657373059728",
  appId: "1:657373059728:web:55db9146ad801f37225615",
  measurementId: "G-EHLCTZ87RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };