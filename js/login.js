// Opens the attendence window

function openWin() {
    var myWindow = window.open("attendence.html");
    setTimeout(function(){ myWindow.close() }, 300000);
}

// Checks if the attendence code valid

function checkattendence() {
    /*var inputAttendence = document.getElementById("").value*/

    if(document.getElementById("input-attendence").value == "111") {
        window.location.replace("attendence-response.html");
    } else {
        alert("Du har angivit fel lösenord. Försök igen.");
    }
}


/*==========================================================================*/


// Checks witch page youre currently at and pops out the html

var currentPage = window.location.pathname.split('/').pop(); // Split will split the path into different obijects

// Accouts with acess to the page

var objPeople = [
    {
        username: "student",
        password: "student",
        account: "student",
        refPage: (currentPage === 'index.html') ? 'html/courses.html' : 'courses.html'
    }, {
        username: "teacher",
        password: "teacher",
        account: "teacher",
        refPage: (currentPage === 'index.html') ? 'html/coursessssss.html' : 'courses.html'  // Html waiting for page
    }, {
        username: "admin",
        password: "admin",
        account: "admin",
        refPage: (currentPage === 'index.html') ? 'html/courseeeeeeeeees.html' : 'courses.html'  // Html waiting for page 
    }
]

// Puts typed username and password into variables

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

// Loops accouts and checks for matches
    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            if(objPeople[i].account == "student") {
              window.location.replace(objPeople[i].refPage);  
            } else if(objPeople[i].account == "teacher") {
                window.location.replace(objPeople[i].refPage);
            } else {
                window.location.replace(objPeople[i].refPage);
            }
            return; // Stops the loop
        }
    }

    alert("Du har angivit fel användarnamn eller lösenord");
}


/*==================================================================================*/


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

