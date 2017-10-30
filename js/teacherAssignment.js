// For the modal
var assignmentModal = document.querySelector("#assignmentModal"); // Get the modal
var assignmentButton = document.querySelectorAll(".assignmentButton"); // Get the button that opens the modal
var assignmentClose = document.querySelector(".assignmentClose"); // Get the <span> element that closes the modal



// Opens modal window to assignment
// When the user clicks on the button, open the modal
for (i = 0; i < assignmentButton.length; i++) {
    assignmentButton[i].onclick = function () {
        assignmentModal.style.display = "block";
    };
}

// When the user clicks on <span> (x), close the modal
assignmentClose.onclick = function () {
    assignmentModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
/// Gets called in attendance.js
function windowCloseAssignmentModal() {
    if (event.target === assignmentModal) {
        assignmentModal.style.display = "none";
        if (assignmentInput.value != "") {
            pageSwap();
        }
    }
}


// Redirects to same page when added grade
function pageSwap() {
    window.location.replace("../teacher/courses.html");
}