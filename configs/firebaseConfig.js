// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VIET_FIREBASE_API_KEY,
  authDomain: "car-marketplace-9098b.firebaseapp.com",
  projectId: "car-marketplace-9098b",
  storageBucket: "car-marketplace-9098b.firebasestorage.app",
  messagingSenderId: "206464611194",
  appId: "1:206464611194:web:dcfe22a210c3bae40e9cc3",
  measurementId: "G-56PJ2BXGE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);