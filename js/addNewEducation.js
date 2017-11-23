let addNewEducation = "<div class=\"teachCourses apperance courseName\"><span contenteditable=\"true\">Skriv namn på utbildningen här...</span></div><div class=\"toned-down teachCourses apperance new\"><a href=\"create.html\">+ Lägg till</a></div><div class=\"invisible-box teachCourses apperance\"></div><div class=\"invisible-box teachCourses apperance\"></div><div class=\"invisible-box teachCourses apperance\"></div>";
let teachWrap = document.querySelector(".teachWrap");
let createNewEducation = document.querySelector("#createNewEducation");

function hej(event) {
    teachWrap.innerHTML += addNewEducation;
    event.preventDefault();
}

createNewEducation.addEventListener("click", hej);