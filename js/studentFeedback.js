
// Page back button for evaluation pages
function goBack() {
	window.history.back(); //Allows the user to return to recent page
}


function check() {
	document.querySelector(".course-evaluation").innerHTML = "";
	document.querySelector(".course-evaluation").innerHTML = "TACK FÖR DINA SVAR";
	setTimeout("pageSwap()",2000);
}
function pageSwap() {
	window.location.replace("../student/courses.html");
}
function checkWeekly() {
	document.querySelector(".weekly-feedback").innerHTML = "";
	document.querySelector(".weekly-feedback").innerHTML = "TACK FÖR DINA SVAR";
	setTimeout("pageSwap()",2000);
	return true;
}
