 function createCode() {
    
    var x = document.querySelector("#teacher-code").selectedIndex;
    var y = document.querySelector("#teacher-code").options;

    var selectedClass = y[x].value;

    var randomCode = Math.floor((Math.random() * 9999) + 1000);



    document.querySelector(".header").innerHTML = "";
    document.querySelector(".header").innerHTML = selectedClass + " " + randomCode;
}