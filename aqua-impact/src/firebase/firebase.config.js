// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDx_1721OMqry7gbVC9Bn0dNb-O9A3HpzU",
  authDomain: "aquaimpact-project.firebaseapp.com",
  projectId: "aquaimpact-project",
  storageBucket: "aquaimpact-project.appspot.com",
  messagingSenderId: "489116423060",
  appId: "1:489116423060:web:06ecdf40e0cd3ad455b581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)