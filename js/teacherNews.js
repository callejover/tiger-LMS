<<<<<<< HEAD
//Sets the input date to current date
function setCurrentDate() {
    document.querySelector(".lesson-day").valueAsDate = new Date();
}

// ==================================================================


var newsModal = document.getElementById('newsModal');

=======
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e
// Get the button that opens the modal
var btn = document.querySelectorAll("a.modal-button, img.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

<<<<<<< HEAD
// When the user clicks on the button, open the modal
newsBtn.onclick = function() {
    newsModal.style.display = "block";
    setCurrentDate();
=======
// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
>>>>>>> 53d8a357a468a473998cc93ce372f7f6ea4bd08e
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
var news = document.querySelector("#newsContent");

function sendNews1() {

	event.preventDefault();

	news.innerHTML = "";
	news.innerHTML = "<strong> Nyheten är nu sparad.</strong>";
}
function swapNewsPage(){
    newsModal.style.display = "none";
}



