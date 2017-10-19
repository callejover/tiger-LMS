// Get the modal
var modal = document.getElementById('assignmentModal');

// Get the button that opens the modal
var btn = document.querySelectorAll(".assignmentButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

function checkAssignment() {
    /*var inputattendance = document.getElementById("").value*/
    var wrongInput = "<strong>Du måste skicka med ett dokument för att lämna in din uppgift!</strong>";
    var rightInput = "<h2>Tack din uppgift är inlämnad och granskas av läraren.</h2><p>Du kommer antigen få feedback från läraren eller så får du ett betyg. Dessa kan du se direkt i tabellen över uppgifter. Denna ruta stängs automatiskt efter 10 sekunder</p>";
    var headerText = document.querySelectorAll(".header");

    event.preventDefault();

    if (document.querySelector("#input-assignment").value === "") {
        document.querySelector(".wrongCodeAssignmnet").innerHTML = wrongInput;
        return false;
    } else {

            // Get the <span> element that closes the modal
            

            // When the user clicks on <span> (x), close the modal
            for (let i = 0; i < btn.length; i++) {       
                headerText[i].onclick = function() {
                    headerText[i].innerHTML = "";
                    headerText[i].innerHTML = rightInput;
                    setTimeout("pageSwap()",10000);
                }
            }

        return true;
    }
    return false;
}


function pageSwap() {

    modal.style.display = "none";
}

// Opens modul window to assignment



// When the user clicks on the button, open the modal
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
    }    
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < btn.length; i++) {       
    span[i].onclick = function() {
        modal.style.display = "none";
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}