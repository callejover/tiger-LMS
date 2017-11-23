// For the modal
var attendanceModal = document.querySelector("#attendanceModal"); // Get the modal
var attendanceButton = document.querySelector("#attendanceButton"); // Get the button that opens the modal
var attendanceClose = document.querySelector(".close"); // Get the <span> element that closes the modal

// For the code validaiton
var attendanceInput = document.querySelector("#input-attendance");
var attendanceHeader = document.querySelector(".header");
var attendanceWrongCode = document.querySelector(".wrongCode");
var attendanceWrongInput = "<strong>Du har angivit fel kod, försök igen!</strong>";
var attendanceRightInput = "<h2>Du har angivit rätt kod!</h2> Du kan nu stänga ner denna ruta.";

// Checks if the attendance code valid
function checkAttendance() {

    event.preventDefault();

    if (attendanceInput.value === "111") {
        attendanceHeader.innerHTML = "";
        attendanceHeader.innerHTML = attendanceRightInput;
        setTimeout("swapPage()",2000);
        return true;

    } else {
        attendanceWrongCode.innerHTML = attendanceWrongInput;
        return false;
    }
}
function swapPage(){
    attendanceModal.style.display = "none";
}
