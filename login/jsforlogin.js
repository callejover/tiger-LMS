

function check(form) { 							/*function to check if userid & password are matching*/
	
	if(form.userid.value == "student" && form.passw.value == "1234") {
		window.open('inloggadtest.html')				/*opens the target page when Id & password matches*/
	}
	else if(form.userid.value == "" && form.passw.value == ""){
		alert("Name and password are required!");
	}
	else {
		alert("Wrong username or password, Please try again!")
	}

}
