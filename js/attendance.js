// Checks if the attendance code valid

function checkAttendance() {
    /*var inputattendance = document.getElementById("").value*/
    var wrongInput= "Du har angivit fel kod!";
    var rightInput = "Du har angivit rätt kod!  du kan nu stänga ner denna ruta."

    if(document.getElementById("input-attendance").value === "111") {
        document.querySelector(".header").innerHTML = "";
        document.querySelector(".header").innerHTML = rightInput;
        // Close module window

        return true;

    } else {
    
        document.querySelector(".wrongCode").innerHTML = wrongInput;
        return false;
    }
return false;
}




// Opens modul window to attendance

// Get the modal
var modal = document.getElementById('attendanceModal');

// Get the button that opens the modal
var btn = document.getElementById("attendanceButton");

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