import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU6DKFS4fymVCIb1i0V1BI64cGa5A2biw",
  authDomain: "twitter-clone-62db6.firebaseapp.com",
  projectId: "twitter-clone-62db6",
  storageBucket: "twitter-clone-62db6.appspot.com",
  messagingSenderId: "834405177347",
  appId: "1:834405177347:web:f8fba92f42274f6d555636"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;