//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCL7XfYwIV90j3UShO0mryn2Jicyb7i2sU",
    authDomain: "kwitter-40e90.firebaseapp.com",
    databaseURL: "https://kwitter-40e90-default-rtdb.firebaseio.com",
    projectId: "kwitter-40e90",
    storageBucket: "kwitter-40e90.appspot.com",
    messagingSenderId: "30880183498",
    appId: "1:30880183498:web:8cb5ca2cc438b0a16eb033"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}