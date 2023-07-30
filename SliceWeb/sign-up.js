  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA05Y3m78Ct-By5_tcVjBXdIpJDOHKKz9o",
    authDomain: "slice-c77b7.firebaseapp.com",
    databaseURL: "https://slice-c77b7-default-rtdb.firebaseio.com",
    projectId: "slice-c77b7",
    storageBucket: "slice-c77b7.appspot.com",
    messagingSenderId: "815821373472",
    appId: "1:815821373472:web:6977331bb202e0fa88fc45"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var fullName = document.getElementById("fullname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var copassword = document.getElementById("copassword")

  window.signup = function (e) {
        e.preventDefault();
        var obj = {
          fullName: fullName.value,
          email: email.value,
          password: password.value,
          copassword: copassword.value,
        };
      
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(success){
          //window.location.replace('HTML/login.html')
          // console.log(success.user.uid)
          alert("signup successfully")
        })
        .catch(function(err){
          alert("Error in " + err)
        });
        //console.log()
        console.log(obj);
      };
  
      document.getElementById("signupinp").addEventListener("click", document.location='homepage.html');