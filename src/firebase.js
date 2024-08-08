

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGki5dQLJvSTmCPgXrTUAlgOpIlhp2XUo",
    authDomain: "book-lovers-7b0ff.firebaseapp.com",
    projectId: "book-lovers-7b0ff",
    storageBucket: "book-lovers-7b0ff.appspot.com",
    messagingSenderId: "921945411334",
    appId: "1:921945411334:web:77004b382d0b3700455887",
    measurementId: "G-ZC1KG54PGV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, setDoc, getDoc };







