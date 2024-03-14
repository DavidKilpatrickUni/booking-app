import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtMflBxXYD-KLWPM7aXDGZukU7hAjHQFU",
    authDomain: "bookingapp-bddac.firebaseapp.com",
    projectId: "bookingapp-bddac",
    storageBucket: "bookingapp-bddac.appspot.com",
    messagingSenderId: "357118430360",
    appId: "1:357118430360:web:0b94482bcad69788fe14ed"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }