
function checkAssignment() {
    /*var inputattendance = document.getElementById("").value*/
    var wrongInput = "<strong>Du måste ladda upp ett dokument för att lämna in som klar!</strong>";
    var rightInput = "<h2Tack för din uppgift</h2> Du kan nu stänga ner denna ruta."

    event.preventDefault();

    if (document.querySelector("#input-assignment").value === "") {
        document.querySelector(".wrongCodeAssignmnet").innerHTML = wrongInput;
        return false;
    } else {
        document.querySelector(".header").innerHTML = "";
        document.querySelector(".header").innerHTML = rightInput;
        // Close module window

        return true;
    }
    return false;
}


// Opens modul window to assignment

// Get the modal
var modal = document.getElementById('assignmentModal');

// Get the button that opens the modal
var btn = document.querySelector(".assignmentButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}