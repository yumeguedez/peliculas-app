// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEynjV_Hl2zSkx61QLrGiDWjdsm6o4-L8",
  authDomain: "peliculas-app-efa46.firebaseapp.com",
  projectId: "peliculas-app-efa46",
  storageBucket: "peliculas-app-efa46.appspot.com",
  messagingSenderId: "863339979244",
  appId: "1:863339979244:web:ea3fe047a6f482f10b60c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
