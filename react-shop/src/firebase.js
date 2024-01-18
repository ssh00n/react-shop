// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQdPD9TAYZLZeCt_CIbNL5miZ3-T5jtkw",
  authDomain: "react-shop-7234f.firebaseapp.com",
  projectId: "react-shop-7234f",
  storageBucket: "react-shop-7234f.appspot.com",
  messagingSenderId: "684352269781",
  appId: "1:684352269781:web:1569277197d8c13654615c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
