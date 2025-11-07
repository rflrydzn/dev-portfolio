// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjjWre9ycMfhz6AjFNA48Uh7wyXtfi9do",
  authDomain: "test-a0bfb.firebaseapp.com",
  databaseURL: "https://test-a0bfb-default-rtdb.firebaseio.com",
  projectId: "test-a0bfb",
  storageBucket: "test-a0bfb.firebasestorage.app",
  messagingSenderId: "884937404858",
  appId: "1:884937404858:web:958c0c6e41d36a502bed83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export { ref, get, set, update };
