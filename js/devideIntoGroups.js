var groupStudents = [
    FE15 = [
        "Anton",
        "Kalle",
        "Robbin",
        "Callé",
        "Rabarber",
        "Kebab",
        "Rotete",
        "Sara",
        "Christoffer",
        "Sebastian"
    ],
    FE16 = [
        "William",
        "Tim",
        "Robba",
        "Atnon",
        "Hello",
        "Tim Arro",
        "Rebecca",
        "Klara",
        "Tobias",
        "Kristian",
        "Klementin"
    ],

    FE17 = [
        "Maria Johansson",
        "Margareta Karlsson",
        "Elisabeth Nilsson",
        "Eva Eriksson",
        "Erik Johansson",
        "Lars Andersson",
        "Christina Jonsson",
        "Carl Persson",
        "Gunnar Bengtsson",
        "Hans Pettersson",
        "Per Larsson",
        "Johan Eriksson",
        "Hans Pettersson",
        "Ingrid Pettersson",
        "Kristina Larsson",
        "Lennart Jonsson",
        "Maria Johansson",
        "Margareta Karlsson",
        "Elisabeth Nilsson",
        "Eva Eriksson",
        "Erik Johansson",
        "Lars Andersson",
        "Christina Jonsson",
        "Carl Persson",
        "Gunnar Bengtsson",
        "Hans Pettersson",
        "Per Larsson",
        "Johan Eriksson",
        "Hans Pettersson",
        "Ingrid Pettersson",
        "Kristina Larsson",
        "Lennart Jonsson"
    ]
];



function groupGenerateClassList() {
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    var groupClassList = document.querySelector("#groupClassList")
    var groupSelectListCount = document.querySelector("#groupsSelectListCount");

    // Resets the list before appending new 
    groupClassList.innerHTML = "";

    for (let i = 0; i < groupStudents.length; i++) {

        // Check witch class is selected
        if (groupSelectListValue == i) {
            for (let j = 0; j < groupStudents[i].length; j++) {

                // Generates the class list
                groupClassList.innerHTML += "<div class=\"groupStudent\" id=\"student" + i + "\">" + groupStudents[i][j] + "</div>";

            }

            // Displays the numbers of students that is currently selected
            groupSelectListCount.innerHTML = "innehåller " + groupStudents[i].length + " elever";
        }
    }

}









function groupGenerateGroups() {
    var numGroups = document.querySelector("#numGroups");
    var groupGroups = document.querySelector("#groupGroups");
    var groupGroupsCount = document.querySelector("#groupGroupsCount");

    //console.log(numGroups.value);

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < numGroups.value; i++) {

        //console.log("groupGroups");
        groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + i + "\"></div>";
        // <div class="groupGroup" id="group1"></div>
        // <div class="groupGroup" id="group2"></div>

    }
}










//groupAutoFill
function groupAutoFillPerGroup() {
    var numGroups = document.querySelector("#numGroups");
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;

    // groupGroupsCount.value


    // Resets the list before appending new 
    groupClassList.innerHTML = "";
    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < groupStudents.length; i++) {

        // Check witch class is selected
        if (groupSelectListValue == i) {

            // Splice array beroende på hur många grupper det ska vara

            // Antal grupper: numGroups.value

            // Antal elver: groupStudents.length

            // Size: groupSelectListValue / numGroups = x
            // runda upp eller ner x för att få ett heltal?
            // Math.floor(groupStudents.length / numGroups.value)


            var size = Math.ceil(groupStudents[i].length / numGroups.value);
            // var size = Math.floor(groupStudents[i].length / numGroups.value);
            // var size = groupStudents[i].length / numGroups.value);

            // var size = Math.fround(groupStudents[i].length / numGroups.value);

            // Testa denna istället: https://jsfiddle.net/wvLpyss5/

            var dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            for (let k = 0; k < dividedGroups.length; k++) {
                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\"></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {

                    var item = document.createElement("div");
                    
                    var textnode = document.createTextNode(dividedGroups[k][j]);
                    
                    item.appendChild(textnode);
                
                    var list = document.getElementById("group" + k);
                    
                    list.insertBefore(item, list.childNodes[0]).setAttribute("class", "groupStudent");
                
                }

            }
        }
    }
}



//groupAutoFill
function groupAutoFillPerStudent() {
    var numStudents = document.querySelector("#numStudents");
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;

    // groupGroupsCount.value


    // Resets the list before appending new 
    groupClassList.innerHTML = "";
    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < groupStudents.length; i++) {

        // Check witch class is selected
        if (groupSelectListValue == i) {

            // Splice array beroende på hur många grupper det ska vara

            // Antal grupper: numGroups.value

            // Antal elver: groupStudents.length

            // Size: groupSelectListValue / numGroups = x
            // runda upp eller ner x för att få ett heltal?
            // Math.floor(groupStudents.length / numGroups.value)


            var size = numStudents.value;
            // var size = Math.floor(groupStudents[i].length / numGroups.value);
            // var size = groupStudents[i].length / numGroups.value);

            // var size = Math.fround(groupStudents[i].length / numGroups.value);

            // Testa denna istället: https://jsfiddle.net/wvLpyss5/

            var dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            for (let k = 0; k < dividedGroups.length; k++) {
                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\"></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {

                    var item = document.createElement("div");
                    
                    var textnode = document.createTextNode(dividedGroups[k][j]);
                    
                    item.appendChild(textnode);
                
                    var list = document.getElementById("group" + k);
                    
                    list.insertBefore(item, list.childNodes[0]).setAttribute("class", "groupStudent");
                
                }

            }
        }
    }
}


// Displays the currently selected class
groupGenerateClassList();
groupGenerateGroups();