import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXeQGu4taeRG7rppebRHUniQm2tVZT-DI",
  authDomain: "proyecto-final-595f4.firebaseapp.com",
  projectId: "proyecto-final-595f4",
  storageBucket: "proyecto-final-595f4.appspot.com",
  messagingSenderId: "919559462842",
  appId: "1:919559462842:web:c665ae05b603124ed64783"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />)
