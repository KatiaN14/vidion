// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; 

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyComzfAKBQx0hdPF2slY8VOGciIgszYYt4",
    authDomain: "vidion-videopinion.firebaseapp.com",
    projectId: "vidion-videopinion",
    storageBucket: "vidion-videopinion.firebasestorage.app",
    messagingSenderId: "371324258137",
    appId: "1:371324258137:web:4dc4222c041d380cfaae48",
    measurementId: "G-XSR6E7TZCP"
  };

// Initialize Firebase and Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Sign Up New Users
document.getElementById("signup-btn").addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sign up successful:", userCredential.user);
    })
    .catch((error) => {
      console.error("Sign up error:", error.code, error.message);
    });
});

// Sign In Existing Users
document.getElementById("signin-btn").addEventListener("click", () => {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sign in successful:", userCredential.user);
    })
    .catch((error) => {
      console.error("Sign in error:", error.code, error.message);
    });
});

// Monitor Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is signed out");
  }
});
