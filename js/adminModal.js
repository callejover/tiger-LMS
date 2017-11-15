// Opens modul window to login

// Get the modal
var createAccountModal = document.getElementById('createAccountModal');

// Get the button that opens the modal
var btn = document.getElementById("createAccountButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("accountClose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    createAccountModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    createAccountModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == createAccountModal) {
        createAccountModal.style.display = "none";
    }
});

