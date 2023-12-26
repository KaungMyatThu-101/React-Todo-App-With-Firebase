// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf5Io6yGEnNDqUL4uZ4ddtsVUXFwH9xck",
  authDomain: "todo-react-firebase-a81d6.firebaseapp.com",
  projectId: "todo-react-firebase-a81d6",
  storageBucket: "todo-react-firebase-a81d6.appspot.com",
  messagingSenderId: "661632308382",
  appId: "1:661632308382:web:3cfb34c562e16849cdd78f",
  measurementId: "G-BYN4W3D3MG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
