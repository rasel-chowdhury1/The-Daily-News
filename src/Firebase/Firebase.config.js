// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJZfYq_76ZLxD979ExVogDl-cJh5cGWtg",
  authDomain: "the-news-dragon-c638f.firebaseapp.com",
  projectId: "the-news-dragon-c638f",
  storageBucket: "the-news-dragon-c638f.appspot.com",
  messagingSenderId: "159482304672",
  appId: "1:159482304672:web:1d5e7c104f833da1e091c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;