import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAz-drOAdfxcaBfLeiekQLnyrVHiDq2nYg",
  authDomain: "netflix-5b611.firebaseapp.com",
  projectId: "netflix-5b611",
  storageBucket: "netflix-5b611.appspot.com",
  messagingSenderId: "928728195723",
  appId: "1:928728195723:web:2cc0a6a7d39af00e022a8e",
  measurementId: "G-XKVRGW2P19",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
