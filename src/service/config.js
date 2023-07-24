import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyCWFp8KUdQbuf1S4R6U69oTumypNcNag9c",

  authDomain: "sombrererostore-cdd18.firebaseapp.com",

  projectId: "sombrererostore-cdd18",

  storageBucket: "sombrererostore-cdd18.appspot.com",

  messagingSenderId: "499838903794",

  appId: "1:499838903794:web:4871799fac0555960ef76b"

};




const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);