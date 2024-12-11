// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA2Aez64h2bhBlAwcXKhpxuiAJV3i0Z7-g",
  authDomain: "aqua-impact.firebaseapp.com",
  projectId: "aqua-impact",
  storageBucket: "aqua-impact.firebasestorage.app",
  messagingSenderId: "910193186896",
  appId: "1:910193186896:web:11ca63518b18b40a055955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)