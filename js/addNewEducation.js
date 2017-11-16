let addNewEducation = "<div class=\"teachCourses apperance courseName\"><span contenteditable=\"true\">Skrv namn på utbildningen här...</span></div><div class=\"toned-down teachCourses apperance classes3\"><a href=\"create.html\">+ Lägg till</a></div><div class=\"invisible-box teachCourses apperance\"></div><div class=\"invisible-box teachCourses apperance\"></div><div class=\"invisible-box teachCourses apperance\"></div>"
let teachWrap = document.querySelector(".teachWrap");
let createNewEducation = document.querySelector("#createNewEducation");

function hej(event) {
    teachWrap.innerHTML += addNewEducation;
    event.preventDefault();
}

createNewEducation.addEventListener("click", hej);


// createNewEducation