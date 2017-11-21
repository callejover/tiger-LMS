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

// Destroys the script
    // attendanceInput.addEventListener("keyup", function (event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         checkAttendance();
    //     }
    // });

// Opens modal window to attendance
    // When the user clicks on the button, open the modal
  //  attendanceButton.onclick = function () {
    //    attendanceModal.style.display = "block";
      //  setCurrentDate(); //Global function from teacherAttendanceCode.js
    //};

    // When the user clicks on <span> (x), close the modal
    attendanceClose.onclick = function () {
        attendanceModal.style.display = "none";
    };

                            

                        // When the user clicks anywhere outside of the modal, close it
                        /// Gets called in attendance.js
                        // function closeModuleTeacher() {
                        //     var modalDialogTeahcer = document.querySelectorAll(".modalDialog");
                        //     for (let i = 0; i < modalDialogTeahcer.length; i++) {
                        //         if (event.target === modalDialogTeahcer[ i]) {
                        //             modalDialogTeahcer[i].style.display = "none";
                        //         }
                        //     }
                        // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target === attendanceModal) {
    //         attendanceModal.style.display = "none";
    //     }
    //     windowCloseAssignmentModal();
        
    //     //closeModuleTeacher();
    // };