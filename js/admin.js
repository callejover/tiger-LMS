// Opens modul window to login

// Get the modal
var modal = document.getElementById('createAccountModal');

// Get the button that opens the modal
var btn = document.getElementById("createAccountButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("accountClose")[0];

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



// =================================================================================

//On submit button, changes the modals inner HTML

let fullNameCreate = document.querySelector("#fullnameCreate");
let createdUserMassage = document.querySelector(".createdUserMassage");
let accountResponse = document.querySelector("#accountResponse");

let accountEmail = document.querySelector("#account-email input");
let accountUsername = document.querySelector("#account-username input");
let accountPassword = document.querySelector("#account-password input");

let createStudent = document.querySelector(".createStudent");
let createTeacher = document.querySelector(".createTeacher");
let accountSelect = document.querySelector("#account-select");


accountResponse.addEventListener("click", function (event) {

    event.preventDefault();

    if (accountSelect.value == "Student") {

        if (fullNameCreate.value != "" && accountEmail.value != "" && accountUsername.value != "" && accountPassword.value != "") {

            let row = createStudents.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.setAttribute("class", "text-align-center");
            cell1.innerHTML = "<input type=\"checkbox\" name=\"\" id=\"Student-" + fullNameCreate.value + "\">";
            cell2.innerHTML = "<label for=\"Student-" + fullNameCreate.value + "\">" + fullNameCreate.value + "</label>";

        }
    } else if (accountSelect.value == "Lärare") {



        console.log("Lärare");

        var courseContainerList = document.querySelector(".courseContainerList select");
        var courseContainerListOption = document.createElement("option");
        
        courseContainerListOption.text = fullNameCreate.value;
    
        courseContainerList.add(courseContainerListOption);




    }

    if (fullNameCreate.value == "") {
        createdUserMassage.innerHTML = "Skriv in namn";
    } else if (accountEmail.value == "") {
        createdUserMassage.innerHTML = "Skriv in e-post"
    } else if (accountUsername.value == "") {
        createdUserMassage.innerHTML = "Skriv in användarnamn";
    } else if (accountPassword.value == "") {
        createdUserMassage.innerHTML = "Skriv in lösenord";
    } else {
        createdUserMassage.innerHTML = "<h3>En ny användare har skapats!</h3><br><p>Ett mail med bekräftelsekod har skickats till den nya användarens e-postadress.</p>";

        fullNameCreate.value = "";
        accountEmail.value = "";
        accountUsername.value = "";
        accountPassword.value = "";

        setTimeout(function () {
            createdUserMassage.innerHTML = "";
        }, 2000);
    }


});




















/*

        For the course creation page

*/

// Checkes of value in array already exists or not
let arrayContains = function (needle) {
    let findNaN = needle !== needle;
    let indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            let i = -1,
                index = -1;

            for (i = 0; i < this.length; i++) {
                let item = this[i];

                if ((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};



// Add Course & Teacher
let addCourseToTableButton = document.querySelector("#add-course-to-table");

let errorMessageCourse = document.querySelector("#errorMessageCourse");
let errorMessageCourseText = "Du måste skriva in ett kursnamn";
let errorMessageTeacherText = "Du måste välja en lärare";
let errorMessageExistsText = " finns redan i listan, välj ett annat namn på kuren";
let messageSuccessText = " kurs tillaggd";

let courseExists = ["JavaScript", "Back End", "Arbetsmetodik"];


errorMessageCourse.classList.add("visibilityHidden");

addCourseToTableButton.addEventListener("click", function (event) {

    let createCourses = document.querySelector(".createCourses table");
    let courseContainerListSelect = document.querySelector(".courseContainerList select");
    let courseContainerListInput = document.querySelector(".courseContainerList input");

    errorMessageCourse.classList.add("visibilityVisible");
    errorMessageCourse.classList.remove("visibilityHidden");

    if (courseContainerListInput.value == "") {
        errorMessageCourse.innerHTML = errorMessageCourseText;
    } else if (courseContainerListSelect.value == "") {
        errorMessageCourse.innerHTML = errorMessageTeacherText;
    } else {
        if (arrayContains.call(courseExists, courseContainerListInput.value) == true) {
            errorMessageCourse.innerHTML = courseContainerListInput.value + errorMessageExistsText;
        } else {
            courseExists.push(courseContainerListInput.value);

            errorMessageCourse.innerHTML = courseContainerListInput.value + messageSuccessText;

            let row = createCourses.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.setAttribute("class", "text-align-center");
            cell1.innerHTML = "<input type=\"checkbox\" name=\"\" id=\"course-" + courseContainerListInput.value + "\">";
            cell2.innerHTML = "<label for=\"course-" + courseContainerListInput.value + "\">" + courseContainerListInput.value + "</label>";
            cell3.innerHTML = courseContainerListSelect.options[courseContainerListSelect.selectedIndex].text;

            courseContainerListInput.value = "";
        }
    }
    setTimeout(function () {

        errorMessageCourse.classList.add("visibilityHidden");
        errorMessageCourse.classList.remove("visibilityVisible");

    }, 2000);
});




// Add Students
let addStudentToTableButton = document.querySelector("#add-student-to-table");

let errorMessageStudent = document.querySelector("#errorMessageStudent");
let errorMessageStudentText = "Du måste välja en student i listan";
let errorMessageStudentExistsText = " finns redan i listan, välj ett annat namn";
let messageStudentSuccessText = " studenten tillaggd";


let createStudents = document.querySelector(".createStudents table");
let studentContainerListSelect = document.querySelector(".studentContainerList select");


let studentContainerListSelectOption = document.querySelector(".studentContainerList select").value;


errorMessageStudent.classList.add("visibilityHidden");

addStudentToTableButton.addEventListener("click", function (event) {

    errorMessageStudent.classList.add("visibilityVisible");
    errorMessageStudent.classList.remove("visibilityHidden");

    if (studentContainerListSelect.value == "") {
        errorMessageStudent.innerHTML = errorMessageStudentText;
    } else {

        let row = createStudents.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        console.log(studentContainerListSelect.value)

        errorMessageStudent.innerHTML = studentContainerListSelect.options[studentContainerListSelect.selectedIndex].text + messageStudentSuccessText;


        cell1.setAttribute("class", "text-align-center");
        cell1.innerHTML = "<input type=\"checkbox\" name=\"\" id=\"Student-" + studentContainerListSelect.value + "\">";
        cell2.innerHTML = "<label for=\"Student-" + studentContainerListSelect.value + "\">" + studentContainerListSelect.options[studentContainerListSelect.selectedIndex].text + "</label>";

        // Removes the added student
        studentContainerListSelect.remove(studentContainerListSelect.selectedIndex);

    }
    setTimeout(function () {

        errorMessageStudent.classList.add("visibilityHidden");
        errorMessageStudent.classList.remove("visibilityVisible");

    }, 2000);
});


// Create class
let addCreatedClass = document.querySelector("#addCreatedClass");
let createCoursesStudents = document.querySelector(".createCoursesStudents");

addCreatedClass.addEventListener("click", function () {
    createCoursesStudents.innerHTML = "<div class=\"courseAddedAfterCreation\">Klassen är tillaggd</div>";

    setTimeout(function () {
        window.location.href = "adminStart.html";
    }, 3000);
});