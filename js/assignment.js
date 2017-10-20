// Get the modal
var assignmentModal = document.querySelector('#assignmentModal');

// Get the button that opens the modal
var assignmentButton = document.querySelectorAll(".assignmentButton");

// Get the <span> element that closes the modal
var assignmentClose = document.querySelectorAll(".assignmentClose");

function checkAssignment() {
    /*var inputattendance = document.getElementById("").value*/
    var wrongInput = "<strong>Du måste skicka med ett dokument för att lämna ditt arbete!</strong>";
    var rightInput = "<h2>Tack för din inlämning</h2> <p>Du kommer antigen få feedback från läraren eller så får du ett betyg. Dessa kan du se direkt i tabellen med uppgifter/examinationsmoment.</p><p>Klicka på krysset eller utanför rutan för att stänga eller annars stängs den efter 30 sekunder.</p>";
    var headerText = document.querySelectorAll(".header");

    event.preventDefault();

    if (document.querySelector("#input-assignment").value === "") {
        document.querySelector(".wrongCodeAssignmnet").innerHTML = wrongInput;
        return false;
    } else {   
            // When the user clicks on <span> (x), close the modal
            for (let i = 0; i < assignmentButton.length; i++) {       
                headerText[i].onclick = function() {
                    headerText[i].innerHTML = "";
                    headerText[i].innerHTML = rightInput;
                    setTimeout("pageSwap()",30000);
                }
            }
        return true;
    }
    return false;
}



// Opens modul window to assignment
// When the user clicks on the button, open the modal
for (let i = 0; i < assignmentButton.length; i++) {
    assignmentButton[i].onclick = function() {
        assignmentModal.style.display = "block";
    }    
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < assignmentButton.length; i++) {       
    assignmentClose[i].onclick = function() {
        assignmentModal.style.display = "none";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == assignmentModal) {
        assignmentModal.style.display = "none";
    }
}




function pageSwap() {
    // Close module
    //modal.style.display = "none";

    // Redirect to page
    window.location.replace("../html/courses.html");
}
