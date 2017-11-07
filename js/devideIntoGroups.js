// if(window.resizeTo > 1200) {
//     resizeWindow();
// }

// function resizeWindow() {
//     var hidddenGroups = document.querySelector(".innerContent"); 

//     hiddenGroups.innerHTML = alert(123);

var groupStudents = [
    FE15 = [
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
        "Per Larsson"
    ],
    FE16 = [
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
        "Per Larsson",
        "Johan Eriksson",
        "Hans Pettersson",
        "Ingrid Pettersson",
        "Kristina Larsson",
        "Lennart Jonsson",

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


// Spits out the class list chosen from select-list
function groupGenerateClassList() {
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    var groupClassList = document.querySelector("#groupClassList")
    var groupSelectListCount = document.querySelector("#groupsSelectListCount");
    var groupGroups = document.querySelector("#groupGroups");

    // To keep the group count intact after loading classList
    groupGenerateGroups();

    for (let i = 0; i < groupStudents.length; i++) {
        // Check witch class is selected
        if (groupSelectListValue == i) {
            for (let j = 0; j < groupStudents[i].length; j++) {
                // Generates the class list
                groupClassList.innerHTML += "<div draggable=\"true\" ondragstart=\"onDragStart(event)\" ondragleave=\"onDragLeave(event)\" class=\"groupStudent\" id=\"drag" + i + j + "\">" + groupStudents[i][j] + "</div>";
            }
            // Displays the numbers of students that is currently selected
            groupSelectListCount.innerHTML = groupStudents[i].length + " st";
        }
    }

}




// Spits out number of groups chosen
function groupGenerateGroups() {
    var numGroups = document.querySelector("#numGroups");
    var groupGroups = document.querySelector("#groupGroups");
    var groupGroupsCount = document.querySelector("#groupGroupsCount");

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < numGroups.value; i++) {
        groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + i + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"></div>";
    }
}




//AutoFill Per Group
function groupAutoFillPerGroup() {
    var numGroups = document.querySelector("#numGroups");
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;

    // Resets the list before appending new 
    groupClassList.innerHTML = "";

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (var i = 0; i < groupStudents.length; i++) {

        // Check witch class is selected
        if (groupSelectListValue == i) {

            var size = Math.ceil(groupStudents[i].length / numGroups.value);

            var  studentUniqueId = 0;
            
            var dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            for (var k = 0; k < dividedGroups.length; k++) {

                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {

                studentUniqueId++;
                    
                console.log(studentUniqueId);

                    var item = document.createElement("div");
                    var textNode = document.createTextNode(dividedGroups[k][j]);
                    item.appendChild(textNode);
                    var list = document.getElementById("group" + k);
                    setAttributes(list.insertBefore(item, list.childNodes[0]), {
                        "draggable": "true",
                        "ondragstart": "onDragStart(event)",
                        "ondragleave": "onDragLeave(event)",
                        "class": "groupStudent",
                        "id": "drag" + studentUniqueId // Uniqe id for every item - look into more fore buggy behavior!
                    });
                }
            }
        }
    }
}



//AutoFill Per Group
function groupAutoFillPerStudent() {
    var numStudents = document.querySelector("#numStudents");
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;

    // Resets the list before appending new 
    groupClassList.innerHTML = "";
    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (var i = 0; i < groupStudents.length; i++) {
        // Check witch class is selected
        if (groupSelectListValue == i) {
            var size = numStudents.value;
            
            var  studentUniqueId = 0;

            var dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            for (var k = 0; k < dividedGroups.length; k++) {
                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {
                    var item = document.createElement("div");
                    var textNode = document.createTextNode(dividedGroups[k][j]);
                    
                    studentUniqueId++;

                    item.appendChild(textNode);

                    var list = document.getElementById("group" + k);
                    setAttributes(list.insertBefore(item, list.childNodes[0]), {
                        "draggable": "true",
                        "ondragstart": "onDragStart(event)",
                        "ondragleave": "onDragLeave(event)",
                        "class": "groupStudent",
                        "id": "drag" + studentUniqueId // Uniqe id for every item - look into more fore buggy behavior!
                    });

                }
            }
        }
    }
}


// For adding more then one attribute on element
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}


// Displays the currently selected class
groupGenerateClassList();
groupGenerateGroups();