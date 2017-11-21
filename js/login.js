// Checks witch page youre currently at and pops out the html

var currentPage = window.location.pathname.split('/').pop(); // Split will split the path into different obijects

// Accouts with acess to the page

var objPeople = [{
    username: "student",
    password: "student",
    account: "student",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/student/courses.html' : 'student/courses.html',

}, {
    username: "teacher",
    password: "teacher",
    account: "teacher",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/teacher/courses.html' : 'teacher/courses.html'
}, {
    username: "admin",
    password: "admin",
    account: "admin",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/admin/adminStart.html' : 'admin/adminStart.html' // Html waiting for page
}]



// Puts typed username and password into variables

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = "Du har skrivit in fel lösenord!";

    //Loops accouts and checks for matches
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            window.location.replace(objPeople[i].refPage);
            return;
        }
    }

    //Displays wrong message if username/password is incorrect
    document.querySelector('#wrongPass').innerHTML = message;
}

document.getElementById("password")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("password").click(getInfo());
    }
});
