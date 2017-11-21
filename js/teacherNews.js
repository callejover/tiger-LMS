//Sets the input date to current date
function setCurrentDate() {
    document.querySelector(".lesson-day").valueAsDate = new Date();
}

// ==================================================================


var newsModal = document.getElementById('newsModal');

// Get the button that opens the modal
var newsBtn = document.getElementById("newsButton");

// Get the <span> element that closes the modal
var newsSpan = document.getElementsByClassName("newsClose")[0];

// When the user clicks on the button, open the modal
newsBtn.onclick = function() {
    newsModal.style.display = "block";
    setCurrentDate();
}

// When the user clicks on <span> (x), close the modal
newsSpan.onclick = function() {
    newsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == newsModal) {
        newsModal.style.display = "none";
    }
});
var news = document.querySelector("#newsContent");
//var selectedValue = document.getElementById("classNews").text;

function sendNews1() {

	event.preventDefault();

	news.innerHTML = "";
	news.innerHTML = "<strong> Nyheten är nu sparad.</strong>";
}
function swapNewsPage(){
    newsModal.style.display = "none";
}