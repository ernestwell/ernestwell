import { initializeApp } from "firebase/app";
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

const firebaseConfig = {
  apiKey: "AIzaSyC_GJY3JdHSFsJEbYT0hKDSyFoIf6da8W4",
  authDomain: "ernestwellbusiness-29e68.firebaseapp.com",
  projectId: "ernestwellbusiness-29e68",
  storageBucket: "ernestwellbusiness-29e68.firebasestorage.app",
  messagingSenderId: "157785726166",
  appId: "1:157785726166:web:8f55a462f4b9aab66efd77",
  measurementId: "G-FYX0L73HQB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email/Password Signup
const signupWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
    alert("Invalid Credentials");
    
  }
};

// Email/Password Login
const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
  }
};

// Google Login
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user)
    return result.user;
    
  } catch (error) {
    console.error(error.message);
  }
};

// Facebook Login
const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    console.error("Email:", error.customData?.email);
    console.error(
      "Credential:",
      FacebookAuthProvider.credentialFromError(error)
    );
  }
};

// GitHub Login
const loginWithGithub = async () => {
  const provider = new GithubAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error.message);
  }
};

// Logout
const logout = async () => {
  await signOut(auth);
};

export {
  signupWithEmailPassword,
  loginWithEmailPassword,
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  logout,
};
