// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
  FacebookAuthProvider ,
  getAuth, 
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const Gprovider = new GoogleAuthProvider();
const Fprovider = new FacebookAuthProvider();
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
 

 
 const Gauth = getAuth()
 onAuthStateChanged(Gauth, (userG) => {
  if (userG) {
    console.log(userG)
    console.log('Logado')
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = userG.uid;
    // ...
  } else {
    console.log('Deslogado')
    // User is signed out
    // ...
  }
  
  
});


const Fauth = getAuth();
onAuthStateChanged(Fauth, (userF) => {
  if (userF) {
    console.log(userF)
    console.log('Logado')
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = userF.uid;
    // ...
  } else {
    console.log('Deslogado')
    // User is signed out
    // ...
  }
});


export const logoutFirebaseGoogle = () => {
  signOut(Gauth).then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.error('An error happened.', error);
  });
};

export const logoutFirebaseFacebook = () => {
  signOut(Fauth).then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.error('An error happened.', error);
  });
};




// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();



export const loginGoogle =() => signInWithPopup(Gauth,Gprovider)
export const loginFacebook =() => signInWithPopup(Fauth,Fprovider)


