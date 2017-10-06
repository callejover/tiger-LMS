function check() {
	var answer = confirm("Vill du skicka dina svar nu?")
	if (answer){
		alert("Tack för dina svar!")
		window.open('../index.html');
	}
	else{
		return false;
	}
}