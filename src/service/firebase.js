// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACrmipH0XHWFCmMuWR0cfY43V__j0EyeA",
  authDomain: "chatreact-7b63a.firebaseapp.com",
  databaseURL: "https://chatreact-7b63a-default-rtdb.firebaseio.com",
  ProjectID: "chatreact-7b63a",
  storageBucket: "chatreact-7b63a.appspot.com",
  messagingSenderId: "643135067453",
  AppID: "1:643135067453:web:d5cd4150073f015c452154",
  measurementId: "G-5P5K8QGC6H"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;