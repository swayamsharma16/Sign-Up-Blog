npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBQEtdELT08IkpmqduPU7-PTy7E_fO2o2E",
authDomain: "auth-development-e4a91.firebaseapp.com",
projectId: "auth-development-e4a91",
storageBucket: "auth-development-e4a91.appspot.com",
messagingSenderId: "615921604431",
appId: "1:615921604431:web:6b294fe001a0d44d45973a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
