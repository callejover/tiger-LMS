// Accouts with acess to the page

var objPeople = [
    {
        username: "student",
        password: "student",
        account: "student"
    }, {
        username: "teacher",
        password: "teacher",
        account: "teacher"
    }, {
        username: "admin",
        password: "admin",
        account: "admin"
    }
]

// Puts typed username and password into variables

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

// Loops accouts and checks for matches

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            if(objPeople[i].account == "student") {
                window.open('http://www.google.com')
            } else if(objPeople[i].account == "teacher") {
                window.open('http://www.aftonbladet.se')
            } else {
                window.open('http://www.csn.se')
            }
            return; // Stops the loop
        }
    } alert("Du har angivit fel användarnamn eller lösenord")
}

// Opens modul window to login

// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById("loginButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
