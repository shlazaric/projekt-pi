import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBGki5dQLJvSTmCPgXrTUAlgOpIlhp2XUo",
    authDomain: "book-lovers-7b0ff.firebaseapp.com",
    projectId: "book-lovers-7b0ff",
    storageBucket: "book-lovers-7b0ff.appspot.com",
    messagingSenderId: "921945411334",
    appId: "1:921945411334:web:77004b382d0b3700455887",
    measurementId: "G-ZC1KG54PGV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebaseApp;
