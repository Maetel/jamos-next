// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ENV_SERVER from "./ENV_SERVER";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ENV_SERVER.FIREBASE_APIKEY,
  authDomain: ENV_SERVER.FIREBASE_AUTHDOMAIN,
  projectId: ENV_SERVER.FIREBASE_PROJECTID,
  storageBucket: ENV_SERVER.FIREBASE_STORAGEBUCKET,
  messagingSenderId: ENV_SERVER.FIREBASE_MESSAGINGSENDERID,
  appId: ENV_SERVER.FIREBASE_APPID,
  measurementId: ENV_SERVER.FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = ENV_SERVER.IS_PROD ? getAnalytics(FirebaseApp) : null;
export default FirebaseApp;
