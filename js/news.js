// Open news modal window

//Get the modal
var newsModal = document.getElementById("newsModal");

// Get the button that opens the modal
var btn = document.getElementById("newsButton");

//Get the span element that closes the modal
var span = document.getElementsByClassName("newsClose")[0];


//When the user clicks on button, open the modal
btn.onclick = function() {
    newsModal.style.display = "block";
}

//When the user clicks on (X), close the modal
span.onclick = function() {
    newsModal.style.display = "none";
}

//When user clicks anywhere outside the modal, close it 
window.onclick = function(event) {
    if (event.target === newsModal) {
        newsModal.style.display = "none";
    }
}