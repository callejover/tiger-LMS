// Account
let fullNameCreate = document.querySelector("#account-name input");
let createdUserMassage = document.querySelector(".createdUserMassage");
let accountResponse = document.querySelector("#accountResponse");

let accountEmail = document.querySelector("#account-email input");
let accountUsername = document.querySelector("#account-username input");
let accountPassword = document.querySelector("#account-password input");

let accountSelect = document.querySelector("#account-select");

let addCreatedClass = document.querySelector("#addCreatedClass");
let createCoursesStudents = document.querySelector(".createCoursesStudents");

// Student
let addStudentToTableButton = document.querySelector("#add-student-to-table");
let errorMessageStudent = document.querySelector("#errorMessageStudent");
let errorMessageStudentText = "Du måste välja en student i listan";
let errorMessageStudentExistsText = " finns redan i listan, välj ett annat namn";
let messageStudentSuccessText = " studenten tillaggd";
let createStudents = document.querySelector(".createStudents table");
let studentContainerListSelect = document.querySelector(".studentContainerList select");
//let studentContainerListSelectOption = studentContainerListSelect.value;
var ul = document.getElementById('myUl');

// Course
let addCourseToTableButton = document.querySelector("#add-course-to-table");
let errorMessageCourse = document.querySelector("#errorMessageCourse");
let errorMessageCourseText = "Du måste skriva in ett kursnamn";
let errorMessageTeacherText = "Du måste välja en lärare";
let errorMessageExistsText = " finns redan i listan, välj ett annat namn på kuren";
let messageSuccessText = " kurs tillaggd";
let courseExists = ["JavaScript", "Back End", "Arbetsmetodik"];


// Adds account to table when creating new account (Student & Teacher)
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

                    /*
                        Lägg in ul istället för table saken här
                    */
            

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
        createdUserMassage.innerHTML = "Skriv in e-post";
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
errorMessageStudent.classList.add("visibilityHidden");

addStudentToTableButton.addEventListener("click", function (event) {

    errorMessageStudent.classList.add("visibilityVisible");
    errorMessageStudent.classList.remove("visibilityHidden");


    let studentContainerListSelectOptionValue = studentContainerListSelect.options[studentContainerListSelect.selectedIndex].value;
    let studentContainerListSelectOptionText = studentContainerListSelect.options[studentContainerListSelect.selectedIndex].text;

    let newStudent = document.createElement('li');
    let removeStudent = document.createElement('button');
    let textStudent = studentContainerListSelectOptionText;


    if (studentContainerListSelectOptionValue === "") {
        errorMessageStudent.innerHTML = errorMessageStudentText;
    } else {

        // let row = createStudents.insertRow(-1);
        // let cell1 = row.insertCell(0);
        // let cell2 = row.insertCell(1);

        // console.log(studentContainerListSelect.value)

        errorMessageStudent.innerHTML = studentContainerListSelectOptionText;


        // cell1.setAttribute("class", "text-align-center");
        // cell1.innerHTML = "<input type=\"checkbox\" name=\"\" id=\"Student-" + studentContainerListSelect.value + "\">";
        // cell2.innerHTML = "<label for=\"Student-" + studentContainerListSelect.value + "\">" + studentContainerListSelect.options[studentContainerListSelect.selectedIndex].text + "</label>";

        // // Removes the added student
        // studentContainerListSelect.remove(studentContainerListSelect.selectedIndex);

        

        if (textStudent === "") {
            alert('Add text');
        } else {
            newStudent.innerHTML = "<span>" + textStudent + "</span>";
            newStudent.appendChild(removeStudent);
            removeStudent.innerHTML = "Ta bort";

            removeStudent.setAttribute("onClick", "removeMe(this)");
            ul.appendChild(newStudent);

            studentContainerListSelect.remove(studentContainerListSelect.selectedIndex);
        }

    }
    setTimeout(function () {

        errorMessageStudent.classList.add("visibilityHidden");
        errorMessageStudent.classList.remove("visibilityVisible");

    }, 2000);
});


function removeMe(item) {
    let removedText = item.parentElement.textContent.replace('Ta bort', '');
    let studentContainerListSelect = document.querySelector(".studentContainerList select");
    var studentContainerListSelectOption = document.createElement("option");

    item.parentElement.parentElement.removeChild(item.parentElement);

    studentContainerListSelectOption.text = "->" + removedText;

    studentContainerListSelect.add(studentContainerListSelectOption);

}







// Create class
addCreatedClass.addEventListener("click", function () {
    createCoursesStudents.innerHTML = "<div class=\"courseAddedAfterCreation\">Klassen är tillaggd</div>";

    setTimeout(function () {
        window.location.href = "adminStart.html";
    }, 3000);
});