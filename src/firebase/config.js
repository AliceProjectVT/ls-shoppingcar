import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// const firebaseConfig = {

//   apiKey: 

//   authDomain: "sombrererostore-cdd18.firebaseapp.com",

//   projectId: "sombrererostore-cdd18",

//   storageBucket: "sombrererostore-cdd18.appspot.com",

//   messagingSenderId: "499838903794",

//   appId: "1:499838903794:web:4871799fac0555960ef76b"

// };

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "chirimoyasa100.firebaseapp.com",

  projectId: "chirimoyasa100",

  storageBucket: "chirimoyasa100.appspot.com",

  messagingSenderId: "7922704913",

  appId: "1:7922704913:web:53729229d2d031596e47b0"

};






const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);