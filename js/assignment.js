// function checkAssignment() {
//     /*var inputassignment = document.getElementById("").value*/
//     var wrongInput = "<strong>Du måste skicka med ett dokument för att lämna ditt arbete!</strong>";
//     var rightInput = "<h2>Tack för din inlämning</h2> <p>Du kommer antigen få feedback från läraren eller så får du ett betyg. Dessa kan du se direkt i tabellen med uppgifter/examinationsmoment.</p><p>Klicka på krysset eller utanför rutan för att stänga eller annars stängs den efter 30 sekunder.</p>";
//     var headerText = document.querySelectorAll(".header");

//     event.preventDefault();

//     if (document.querySelector("#input-assignment").value === "") {
//         document.querySelector(".wrongCodeAssignmnet").innerHTML = wrongInput;
//         return false;
//     } else {

//         headerText.innerHTML = "";
//         headerText.innerHTML = rightInput;
//         setTimeout("pageSwap()", 30000);
//     }
// }


// For the modal
var assignmentModal = document.getElementById('assignmentModal'); // Get the modal
var assignmentButton = document.getElementById("assignmentButton"); // Get the button that opens the modal
var assignmentClose = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

// For the code validaiton
var assignmentInput = document.getElementById("input-assignment");
var assignmentHeader = document.querySelector(".header");
var assignmentWrongCode = document.querySelector(".wrongCode");
var assignmentWrongInput = "<strong>Du har angivit fel kod, försök igen!</strong>";
var assignmentRightInput = "<h2>Du har angivit rätt kod!</h2> Du kan nu stänga ner denna ruta.";

// Checks if the assignment code valid
function checkAssignment() {

    event.preventDefault();

    if (assignmentInput.value === "111") {
        assignmentHeader.innerHTML = "";
        assignmentHeader.innerHTML = assignmentRightInput;
        return true;

    } else {
        assignmentWrongCode.innerHTML = assignmentWrongInput;
        return false;
    }
}

assignmentInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        checkassignment();
    }
});

// Opens modal window to assignment
    // When the user clicks on the button, open the modal
    assignmentButton.onclick = function () {
        assignmentModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    assignmentClose.onclick = function () {
        assignmentModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === assignmentModal) {
            assignmentModal.style.display = "none";
        }
    };