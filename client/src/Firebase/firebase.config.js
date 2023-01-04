// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD66IQRhpBgSrwNkVV0Mt1qipvJCTzd7PQ",
    authDomain: "fitness-center-5942d.firebaseapp.com",
    projectId: "fitness-center-5942d",
    storageBucket: "fitness-center-5942d.appspot.com",
    messagingSenderId: "411713369102",
    appId: "1:411713369102:web:6d722369c44398d529b85f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;