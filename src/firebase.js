import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2KzMxy4SnCuJfKUe0LIlnwI7NQs6ETks",
    authDomain: "slack-clone-b141e.firebaseapp.com",
    projectId: "slack-clone-b141e",
    storageBucket: "slack-clone-b141e.appspot.com",
    messagingSenderId: "811450018895",
    appId: "1:811450018895:web:3ea3705e86dc7dec910e3a",
    measurementId: "G-78DS97MPX5"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;



// 1:54:40