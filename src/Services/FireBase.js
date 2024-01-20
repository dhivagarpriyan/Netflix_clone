// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const{
    VITE_API_KEY,
    VITE_AUTH_DOMAIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_APP_ID,
    VITE_MEASUREMENT_ID
}=import.meta.env
const firebaseConfig = {
  apiKey:VITE_API_KEY,
  authDomain:VITE_AUTH_DOMAIN,
  projectId:VITE_PROJECT_ID,
  storageBucket:VITE_STORAGE_BUCKET,
  messagingSenderId:VITE_MESSAGING_SENDER_ID,
  appId:VITE_APP_ID,
  measurementId:VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app)
 export const db = getFirestore(app)