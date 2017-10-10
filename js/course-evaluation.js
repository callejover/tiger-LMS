function check() {
	var answer = confirm("Vill du skicka dina svar nu?")
	if (answer) {

		alert("Tack för dina svar!");
		return true;

	}
	else {
		return false;
	}
}