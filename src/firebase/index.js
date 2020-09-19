import * as firebase from "firebase/app"; // Firebase App (the core Firebase SDK) is always required and must be listed first
import "firebase/analytics"; // for Analytics
// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqc9jbtf-QMfVrz4svWqPwU2ZOpRFKWOE",
    authDomain: "specno-50926.firebaseapp.com",
    databaseURL: "https://specno-50926.firebaseio.com",
    projectId: "specno-50926",
    storageBucket: "specno-50926.appspot.com",
    messagingSenderId: "977035049854",
    appId: "1:977035049854:web:0df34176741a94be0f512f",
    measurementId: "G-HPPBYS41P1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

export default {
    firebase, db
};

