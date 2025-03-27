import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_GJY3JdHSFsJEbYT0hKDSyFoIf6da8W4",
  authDomain: "ernestwellbusiness-29e68.firebaseapp.com",
  projectId: "ernestwellbusiness-29e68",
  storageBucket: "ernestwellbusiness-29e68.appspot.com",
  messagingSenderId: "157785726166",
  appId: "1:157785726166:web:8f55a462f4b9aab66efd77",
  measurementId: "G-FYX0L73HQB",
};

// Check if Firebase is already initialized to prevent duplicate instances
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Debugging: Check Firebase initialization
console.log("Firebase initialized:", app.name);

// Function to save user data to Firestore
const saveUserToFirestore = async (user, defaultRole = "user") => {
  if (!user) {
    console.warn("No user data provided to save.");
    return;
  }

  const userRef = doc(db, "users", user.uid);
  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const existingRole = userDoc.data().role;
      console.log(`User already exists with role: ${existingRole}`);
      return;
    }

    // Save new user with role
    await setDoc(userRef, { email: user.email, role: defaultRole }, { merge: true });
    console.log("User saved to Firestore:", user.email);
  } catch (error) {
    console.error("Error saving user to Firestore:", error);
  }
};

// Function to check if user is an admin
export const checkAdmin = async (uid) => {
  if (!uid) return false;

  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("Fetched user data:", userData);
      return userData.role === "admin";
    } else {
      console.warn("No user document found for UID:", uid);
      return false;
    }
  } catch (error) {
    console.error("Error checking admin role:", error);
    return false;
  }
};

// Sign up with email and password
const signupWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToFirestore(userCredential.user, "user");
    return userCredential.user;
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
};

// Login with email and password
const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

// Generic function for social login
const socialLogin = async (provider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    await saveUserToFirestore(result.user, "user");
    return result.user;
  } catch (error) {
    console.error(`${provider.providerId} login error:`, error.message);
    throw error;
  }
};

// Login with Google
const loginWithGoogle = () => socialLogin(new GoogleAuthProvider());

// Login with Facebook
const loginWithFacebook = () => socialLogin(new FacebookAuthProvider());

// Login with Github
const loginWithGithub = () => {
  const provider = new GithubAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return socialLogin(provider);
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
};

// Export Firebase utilities
export {
  auth,
  db,
  signupWithEmailPassword,
  loginWithEmailPassword,
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  logout,
  saveUserToFirestore,
};