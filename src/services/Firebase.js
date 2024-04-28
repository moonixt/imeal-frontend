// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM8q58JxdK8QSTi0C7agJoTiGx50331mc",
    authDomain: "fir-auth-37eba.firebaseapp.com",
    projectId: "fir-auth-37eba",
    storageBucket: "fir-auth-37eba.appspot.com",
    messagingSenderId: "666092055763",
    appId: "1:666092055763:web:681230ce6ea97dd693b826"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);