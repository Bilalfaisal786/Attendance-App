// /src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyBde9ZY-5-7ni7TgJ8Lyx7s_RGJxwCj4yk",
  authDomain: "final-hackathon-project-a279f.firebaseapp.com",
  projectId: "final-hackathon-project-a279f",
  storageBucket: "final-hackathon-project-a279f.appspot.com",
  messagingSenderId: "415805518580",
  appId: "1:415805518580:web:c8ac7eddc063a86af364a1",
  measurementId: "G-YN6J7Z4G7C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Add this line to initialize the authentication module
const db = getFirestore(app);
export { app, analytics, auth,db };
