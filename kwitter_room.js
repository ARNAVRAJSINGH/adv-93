
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-7OAf0AduCk94IJsarD5qB5S9hACZUkI",
  authDomain: "kwitter-11a39.firebaseapp.com",
  databaseURL: "https://kwitter-11a39-default-rtdb.firebaseio.com",
  projectId: "kwitter-11a39",
  storageBucket: "kwitter-11a39.appspot.com",
  messagingSenderId: "388921685902",
  appId: "1:388921685902:web:bea3bf43bb1320133616df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 