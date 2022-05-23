// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeZn71ng_ijU2R83I1S3RJ-4k70manlr8",
    authDomain: "digitaz.firebaseapp.com",
    projectId: "digitaz",
    storageBucket: "digitaz.appspot.com",
    messagingSenderId: "871248995637",
    appId: "1:871248995637:web:19230765042603849a587c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;