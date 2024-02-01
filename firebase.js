// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth/';
import 'firebase/compat/firestore';

import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLV66Wlm06IUrEfISB4X4NtK9jmKFLAuA",
    authDomain: "first-reactnativeapp.firebaseapp.com",
    projectId: "first-reactnativeapp",
    storageBucket: "first-reactnativeapp.appspot.com",
    messagingSenderId: "602767757642",
    appId: "1:602767757642:web:2fa0d8bf9f2bfcd57a71b3",
    measurementId: "G-BY6YP4NFGX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

const auth = firebase.auth();
const auth2 = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, db, provider, auth2};