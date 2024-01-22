// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuch9iriZCvF1pD3t0QJVUOM4dZ5g_l0s",
  authDomain: "weather-vista-f2a1b.firebaseapp.com",
  projectId: "weather-vista-f2a1b",
  storageBucket: "weather-vista-f2a1b.appspot.com",
  messagingSenderId: "1057420521051",
  appId: "1:1057420521051:web:46f06ce9b6800dbbcb197e",
  measurementId: "G-MTWZEK6VYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);

// apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
