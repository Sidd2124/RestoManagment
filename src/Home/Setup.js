
import firebase from 'firebase/compat/app'; // Notice the correct import statement
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDkVPLheZScmw82NOb6Hen0ywyJHJ9Zs8I",
    authDomain: "restomenu-b798e.firebaseapp.com",
    databaseURL: "https://restomenu-b798e-default-rtdb.firebaseio.com",
    projectId: "restomenu-b798e",
    storageBucket: "restomenu-b798e.appspot.com",
    messagingSenderId: "317392282082",
    appId: "1:317392282082:web:c378fb0aee3d1bfdac99bb"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;

