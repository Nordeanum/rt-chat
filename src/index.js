import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCetMHTHJYwizLc5WDfWVpVzDuTXjge8t4",
    authDomain: "real-time-chat-731d2.firebaseapp.com",
    projectId: "real-time-chat-731d2",
    storageBucket: "real-time-chat-731d2.appspot.com",
    messagingSenderId: "1173551338",
    appId: "1:1173551338:web:d9edc95d59930ca33c3f93",
    measurementId: "G-LH55SMCC5Y"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{app, auth, firestore}}>
        <App />
    </Context.Provider>,
  </React.StrictMode>
);