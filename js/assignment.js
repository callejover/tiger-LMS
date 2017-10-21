// For the modal
var assignmentModal = document.querySelector("#assignmentModal"); // Get the modal
var assignmentButton = document.querySelectorAll(".assignmentButton"); // Get the button that opens the modal
var assignmentClose = document.querySelector(".assignmentClose"); // Get the <span> element that closes the modal

// For the code validaiton
var assignmentInput = document.querySelector("#input-assignment");
var assignmentHeader = document.querySelector(".headerAssignment");
var assignmentWrongCode = document.querySelector(".wrongCodeAssignmnet");
var assignmentWrongInput = "<strong>Du måste skicka med ett dokument för att lämna ditt arbete!</strong>";
var assignmentRightInput = "<h2>Tack för din inlämning</h2> <p>Du kommer antigen få feedback från läraren eller så får du ett betyg. Dessa kan du se direkt i tabellen med uppgifter/examinationsmoment.</p><p>Klicka på krysset eller utanför rutan för att stänga eller annars stängs den efter 30 sekunder.</p>";

console.log(assignmentButton);

function checkAssignment() {
    /*var inputassignment = document.getElementById("").value*/

    event.preventDefault();

    if (assignmentInput.value == "") {
        assignmentWrongCode.innerHTML = assignmentWrongInput;
        return false;
    } else {

        assignmentHeader.innerHTML = "";
        assignmentHeader.innerHTML = assignmentRightInput;
        setTimeout("pageSwap()", 30000);
    }
}

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
    window.location.replace("../html/courses.html");
}