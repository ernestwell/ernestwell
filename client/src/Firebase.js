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
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_GJY3JdHSFsJEbYT0hKDSyFoIf6da8W4",
  authDomain: "ernestwellbusiness-29e68.firebaseapp.com",
  projectId: "ernestwellbusiness-29e68",
  storageBucket: "ernestwellbusiness-29e68.appspot.com",
  messagingSenderId: "157785726166",
  appId: "1:157785726166:web:8f55a462f4b9aab66efd77",
  measurementId: "G-FYX0L73HQB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const saveUserToFirestore = async (user, defaultRole = "user") => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const existingRole = userDoc.data().role;
    if (existingRole) {
      console.log(`User already has role: ${existingRole}`);
      return;
    }
  }

  await setDoc(userRef, { email: user.email, role: defaultRole }, { merge: true });
};

export const checkAdmin = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("Fetched user data:", userData);
      
      // Check if role exists before returning
      return userData.role && userData.role === "admin";
    } else {
      console.log("No user document found in Firestore for UID:", uid);
      return false;
    }
  } catch (error) {
    console.error("Error checking admin role:", error);
    return false;
  }
};


const signupWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToFirestore(userCredential.user, "user");
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
  }
};

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    await saveUserToFirestore(result.user, "user");
    return result.user;
  } catch (error) {
    console.error(error.message);
  }
};

const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    await saveUserToFirestore(result.user, "user");
    return result.user;
  } catch (error) {
    console.error(error.message);
  }
};

const loginWithGithub = async () => {
  const provider = new GithubAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const result = await signInWithPopup(auth, provider);
    await saveUserToFirestore(result.user, "user");
    return result.user;
  } catch (error) {
    console.error(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error.message);
  }
};

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
