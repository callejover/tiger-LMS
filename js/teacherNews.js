var modal = document.getElementById('newsModal');

// Get the button that opens the modal
var btn = document.getElementById("newsButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("newsClose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function closeNewsModal() {
    if (event.target === newsModal) {
        newsModal.style.display = "none";
    }
}
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