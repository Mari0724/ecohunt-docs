import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUCquub2sN25lokvJUDzjp4Rzu5XjdWrw",
  authDomain: "ecohunt-docs.firebaseapp.com",
  projectId: "ecohunt-docs",
  storageBucket: "ecohunt-docs.firebasestorage.app",
  messagingSenderId: "60123959114",
  appId: "1:60123959114:web:0a21639ff2183366f87bb3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();

// LOGIN FUNCIONA CON POPUP
export const githubLogin = () => {
  return signInWithPopup(auth, githubProvider);
};

export const githubLogout = () => {
  return signOut(auth);
};
