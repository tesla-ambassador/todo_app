import {initializeApp} from 'firebase/app'
import { getFirestore, collection, orderBy, query } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_wnxmrvK-JtLTp9ql9rS2j2VVDmPLVXQ",
    authDomain: "todo-app-dca73.firebaseapp.com",
    projectId: "todo-app-dca73",
    storageBucket: "todo-app-dca73.appspot.com",
    messagingSenderId: "161487772207",
    appId: "1:161487772207:web:b357d129216437553c04da",
    measurementId: "G-5N02D4Q7HN"
}

initializeApp(firebaseConfig)

const db = getFirestore();

const colRef = collection(db, 'todos')

const q = query(colRef, orderBy('timestamp', 'desc'))

export default colRef;
export {q};