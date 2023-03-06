import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqwELmbe_K4FwgboBNud6m6e51iPe_mfA",
    authDomain: "asaxiy-exam.firebaseapp.com",
    projectId: "asaxiy-exam",
    storageBucket: "asaxiy-exam.appspot.com",
    messagingSenderId: "51937809984",
    appId: "1:51937809984:web:dd62d16a378143ee7d71a5",
    measurementId: "G-317N5GCELC"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)