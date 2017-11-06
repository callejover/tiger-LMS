//Sets the input date to current date for quicker attendancecode
function setCurrentDate() { // Gets called from windowOnClickFunction.js
    document.querySelector("#lesson-day").valueAsDate = new Date();
}


// ===================================================================================================================


 //Chooses class and creates a random code that displays in the same modal
 function createCode() {

    //Chooses the selected option in the dropdown
    var x = document.querySelector("#teacher-code").selectedIndex;
    //Creates the dropdowns options to an array
    var y = document.querySelector("#teacher-code").options;
    //Finds the dropdowns optiions, then finds the class and returns the value
    var selectedClass = y[x].value;

    var lessonDay = document.querySelector("#lesson-day").value;

    //Chooses the selected option in the dropdown
    // var xx = document.querySelector("#lesson-code").selectedIndex;
    //Creates the dropdowns options to an array
    // var yy = document.querySelector("#lesson-code").options;
    //Finds the dropdowns optiions, then finds the class and returns the value
    // var selectLesson = yy[xx].text;

    //Sets the random number between 1111 and 9999
    var randomCode = getRndInteger(1111,9999);

    //Creates"" the new modals content after you've clicked on create code
    // document.querySelector(".header").innerHTML = "Skapa" + randomCode + "Skapa" + selectedClass + "Skapa" + lessonDay;
    document.querySelector(".header").innerHTML = "Din närvarokod för klass. <br><h4>" + selectedClass + "</h4><br>Lektion vid datum.<br><h4>" + lessonDay + ".</h4><br><h2>" + randomCode; ".</h2>"
}


// Creates the random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/* <h4>" + selectedClass + "</h4> */
// "Den nya lektionskoden <br><h4>" + selectLesson + "</h4><br><h2>" + randomCode +"</h2>";
