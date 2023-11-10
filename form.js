import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAT7GCO5z637jvs9b2KdTYIiqLGJwhs96w",
    authDomain: "login-a47ba.firebaseapp.com",
    projectId: "login-a47ba",
    storageBucket: "login-a47ba.appspot.com",
    messagingSenderId: "245611119396",
    appId: "1:245611119396:web:f505f0e7d5a405c216e9b1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});

document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
         document.getElementById("result-box").style.display="none";
         document.getElementById("login-div").style.display="inline";
    }).catch((error) => {
       document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    });

  
  });