import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebase = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKYeoSeCHlhE2CnIU9M3xIwK2-pNOVwk4",
  authDomain: "mechahearts-941cd.firebaseapp.com",
  databaseURL: "https://mechahearts-941cd-default-rtdb.firebaseio.com",
  projectId: "mechahearts-941cd",
  storageBucket: "mechahearts-941cd.appspot.com",
  messagingSenderId: "13898217379",
  appId: "1:13898217379:web:b051ece6c8e9af3a83cc16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById("login-form");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect the user to a protected page or show a success message
    })
    .catch((error) => {
      // Show an error message
    });
});

// Initialize the Google Sign-In API with your client ID
gapi.load('auth2', function() {
  gapi.auth2.init({
    client_id: '13898217379-5en70dccdf45p6qu3df45p6qu3ik34699tv5popdc.apps.googleusercontent.com'
  });
});

function onSignIn(googleUser) {
  // Get the user's ID token and basic profile information
  var id_token = googleUser.getAuthResponse().id_token;

  // Use the token and profile information to sign in the user
  // using Firebase Authentication
  firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(id_token))
    .then(function(result) {
      // User is signed in
    })
    .catch(function(error) {
      // Handle error
    });
}

$(document).ready(function(){
    console.log("script is running");
    $("a").click(function(){
        console.log("link clicked");
        $("body").fadeOut(1000);
    });
});
