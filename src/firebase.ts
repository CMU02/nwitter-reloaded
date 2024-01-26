import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARx8s5p9kRjW5_LuiWZQV8lP2BaaBMIeA",
  authDomain: "nwitter-reloaded-b4fe8.firebaseapp.com",
  projectId: "nwitter-reloaded-b4fe8",
  storageBucket: "nwitter-reloaded-b4fe8.appspot.com",
  messagingSenderId: "1022783011058",
  appId: "1:1022783011058:web:0df568f7d7467492f1386b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);