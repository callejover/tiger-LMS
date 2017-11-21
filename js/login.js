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

<<<<<<< HEAD
    //Loops accouts and checks for matches
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
=======

//Loops accouts and checks for matches
    for( i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e
            window.location.replace(objPeople[i].refPage);
            return;
        }
    }
<<<<<<< HEAD

    //Displays wrong message if username/password is incorrect
    document.querySelector('#wrongPass').innerHTML = message;

=======
document.querySelector('#wrongPass').innerHTML = message;
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e
}


/*==================================================================================*/






<<<<<<< HEAD
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
=======
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e



//Allows enter click to submit
<<<<<<< HEAD


document.getElementById("password").addEventListener("keyup", function (event) {
=======
document.getElementById("password").addEventListener("keyup", function(event) {
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("password").click(getInfo());
    }
});