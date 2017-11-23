$(document).ready(function eraseContent() {
    $(document).on('mouseenter', '.remove', function () {
        $(this).find("#i").show();
    }).on('mouseleave', '.remove', function () {
        $(this).find("#i").show();
    }).on('click', '#i', function() {
        $(this).parent().remove();
    });
	});

function addContent1(myForm){
  $(myForm).prepend('<div class = "remove">  <h4 class="marLeft" contenteditable="true">Namnlös</h4><textarea placeholder="Ditt svar" cols="30" rows="5"></textarea><br><button type="button" id="i" onclick="eraseContent()">Ta bort</button><br></div><br>');
};

function addContent2(myForm){
  $(myForm).prepend('<div class = "remove"><h4 class="marLeft" contenteditable="true">Namnlös</h4><span class="slider-value" id="number4"></span><div class="flexSliderContainer"><span class="slider-text text-align-right">Dålig stämning.</span><input type="range" min="0" max="10" value="5" class="create_slider4" id="slider4"><span class="slider-text">Stämmer mycket väl.</span></div><button type="button" id="i" onclick="eraseContent()">Ta bort</button></div><br>');
};

function addContent3(myForm){
  $(myForm).prepend('<div class = "remove"><h4 class="marLeft" contenteditable="true">Namnlös</h4><p class="pricing_text" contenteditable="true">Skriv beskrivning</p><div class="course-contains"><label><input type="checkbox" name="courseContains" value="1"><t class="pricing_text" contenteditable="true">Uppgift 1</t></label><br><button type="button" id="btn1" onclick="addContent4()">Lägg till Checkbox</button></div><button type="button" id="i" onclick="eraseContent()">Ta bort</button></div><br>');
};

function addContent4(){
  $(".course-contains").prepend('<label><input type="checkbox" name="courseContains" value="6"><t contenteditable="true">Namnlös</t></label><br>');
};


// Page back button for evaluation pages
function goBack() {
	window.history.back(); //Allows the user to return to recent page
}

function check() {
	document.querySelector(".course-evaluation").innerHTML = "";
	document.querySelector(".course-evaluation").innerHTML = "Formulär sparat!";
}

function checkWeekly() {
	document.querySelector(".weekly-feedback").innerHTML = "";
	document.querySelector(".weekly-feedback").innerHTML = "Formulär sparat!";
	return true;
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById(".toTop").style.display = "block";
    } else {
        document.getElementById(".toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}