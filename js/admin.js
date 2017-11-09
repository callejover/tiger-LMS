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

function response() {
    document.querySelector("#accout-respond-box").innerHTML = "Grattis!<br>Du har skapat ett nytt konto!<br>Ett mail har skickats med en <strong>aktiveringskod</strong> till den nya användarens e-postadress.";

}