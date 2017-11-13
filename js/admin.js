// Opens modul window to login

// Get the modal
var modal = document.getElementById('createAccountModal');

// Get the button that opens the modal
var btn = document.getElementById("createAccountButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("accountClose")[0];

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



// =================================================================================

//On submit button, changes the modals inner HTML

function accountResponse() {
        document.querySelector('.header').innerHTML = "<h3>En ny användare har skapats!</h3><br><p>Ett mail med bekräftelsekod har skickats till den nya användarens e-postadress.</p>";
}