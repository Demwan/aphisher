window.onload = g;

var usernameButton = document.getElementById("usernameSubmit")
var usernameField = document.getElementById("usernameField")
var submitButton = document.getElementById("form_submit")
var password = document.getElementById("password")
var passwordLine = document.getElementById("password-line")
var editUsernameButton = document.getElementById("editUsername")
var header = document.getElementById('header')
var head = document.getElementById('headText')

// Goeiemiddag tekst

function g () {
    var t = (new Date).getHours();
    console.log(t);
    if (t < 6) {
        head.innerHTML="Goedenacht,"
    } if (t < 12) {
        head.innerHTML="Goedemorgen,"
    } if (t < 18) {
        head.innerHTML="Goedemiddag,"
    } else {
        head.innerHTML="Goedeavond,"
    }
}



usernameButton.addEventListener('click', submitUsername);
editUsernameButton.addEventListener('click', editUsername);


// If the user presses the "Enter" key on the keyboard
usernameField.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      usernameButton.click();
    }
  });                

// If user confirms username
function submitUsername () {
  form_submit.style.display="block";
  password.style.display="block";
  passwordLine.style.display="block";
  usernameButton.style.display="none"
  document.getElementById('email').setAttribute('readonly', true)
  usernameField.style.backgroundColor="e5e5e5"
  usernameField.style.border="none";
  editUsernameButton.style.display="block";
  header.innerHTML="Vul je wachtwoord in";
  password.focus();
  password.select();
};

// If user wants to change user name, after confirmation
function editUsername () {
    form_submit.style.display="none";
    password.style.display="none";
    passwordLine.style.display="none";
    usernameButton.style.display="block"
    document.getElementById('email').removeAttribute('readonly')
    usernameField.style.backgroundColor="ffffff"
    usernameField.style.border="1px solid #ccc";
    editUsernameButton.style.display="none";
    header.innerHTML="Vul je gebruikersnaam in";
  };