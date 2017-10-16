// Checks if the attendance code valid

function checkAttendance() {
    /*var inputattendance = document.getElementById("").value*/

    if(document.getElementById("input-attendance").value === "111") {
        alert("Du har angivit rätt lektionskod.\nVälkommen till lektionen!\nDu kan nu stänga fönstret.");
        // Close module window
        return true
    } else {
        alert("Du har angivit fel lösenord. Försök igen.");
        return false
    }
    return false
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