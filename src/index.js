import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyIHfVMZtwCV1L5-SHxGwf42fgVhlzr4A",
    authDomain: "rt-chat-c1aec.firebaseapp.com",
    projectId: "rt-chat-c1aec",
    storageBucket: "rt-chat-c1aec.appspot.com",
    messagingSenderId: "165442080612",
    appId: "1:165442080612:web:6397b8a7ec4dc4b7027471",
    measurementId: "G-6S962G98DL"
};
const app = initializeApp(firebaseConfig);

export const Context = createContext(null);


// const auth = firebase.auth();
// const firestore = firebase.firestore();

const auth = null;
const firestore = null;

console.log(auth);
console.log(firestore);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{firebase, auth, firestore}}>
        <App />
    </Context.Provider>
  </React.StrictMode>
);