var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);


$(document).ready(function(){
    console.log("script is running");
    $("a").click(function(){
        console.log("link clicked");
        $("body").fadeOut(1000);
    });
});
