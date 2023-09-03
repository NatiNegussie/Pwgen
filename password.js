
function genPassword() {
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var passwordLength = 12;
   var password = "";
   for (i = 0; i <= passwordLength; i++) {
       var random = Math.floor(Math.random() * chars.length);
       password += chars.substring(random, random + 1);
      document.getElementById("password").value = password; 
   }
    
    }
    
function copy() {
let h1 = document.getElementById("h1");
h1.innerText = "Successfully Copied";
     h1.style.color = "lightgreen";
if (document.getElementById("password").value == "") {
         h1.innerText = "Please generate a password";
         h1.style.color = "red";
         document.getElementById("body").innerHTML += "<div class=\"info\"><p>You copied</p>" + "<p>" + "no thing" + "</p></div>";
     }
     
else {
          document.getElementById("password").select();
      document.execCommand("copy");
 document.getElementById("body").innerHTML += "<div class=\"info\"><p>You copied</p>" + "<p>" + document.getElementById("password").value + "</p></div>";
}
     
   }
