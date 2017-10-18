 
 //Chooses class and creates a random code that displays in the same modal
 function createCode() {

    //Chooses the selected option in the dropdown
    var x = document.querySelector("#teacher-code").selectedIndex;
    //Creates the dropdowns options to an array
    var y = document.querySelector("#teacher-code").options;
    //Finds the dropdowns optiions, then finds the class and returns the value
    var selectedClass = y[x].value;

    //Chooses the selected option in the dropdown
    var xx = document.querySelector("#lesson-code").selectedIndex;
    //Creates the dropdowns options to an array
    var yy = document.querySelector("#lesson-code").options;
    //Finds the dropdowns optiions, then finds the class and returns the value
    var selectLesson = yy[xx].text;

    //Sets the random number between 1111 and 9999
    var randomCode = getRndInteger(1111,9999);

    //Creates the new modals content after you've clicked on create code
    document.querySelector(".header").innerHTML = "Den nya lektionskoden för <strong>" + selectedClass + "</strong> och <strong>" + selectLesson + "</strong> är <br><h2>" + randomCode +"</h2>";
}


// Creates the random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}