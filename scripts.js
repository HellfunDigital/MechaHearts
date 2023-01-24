const firebase = require("firebase/app");
import "firebase/auth";

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
const errorMessage = document.getElementById("error-message");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
       // Redirect the user to the profile page
       window.location.href = "profile.html";
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.href = "profile.html"; // Redirect to profile page
  } else {
    // No user is signed in.
  }
});

const errorMessage = document.getElementById("error-message");
errorMessage.textContent = error.message;


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
  firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider().credential(id_token))
    .then(function(result) {
      // User is signed in
    })
    .catch(function(error) {
      // Handle error
    });
}

// Reference to the form element
const loginForm = document.querySelector("#login-form");

// Reference to the message element
const loginMessage = document.querySelector("#login-message");

// Listen for form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the email and password values
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  // Sign in the user with Firebase
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // Show a success message
      loginMessage.textContent = "Login Successful!";
    })
    .catch((error) => {
      // Show an error message
      loginMessage.textContent = error.message;
    });
});

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  const playerNameRef = firebase.database().ref('playerName');
  playerNameRef.on('value', (snapshot) => {
    const playerName = snapshot.val();
  });

  const playerNameElement = document.getElementById('player-name');
  playerNameElement.textContent = playerName;

  logOutButton.addEventListener("click", ()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "login.html";
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
    });


$(document).ready(function(){
    console.log("script is running");
    $("a").click(function(){
        console.log("link clicked");
        $("body").fadeOut(1000);
    });
});

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 2, 24);
    }
  }
}
