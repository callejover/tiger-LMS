// if(window.resizeTo > 1200) {
//     resizeWindow();
// }

// function resizeWindow() {
//     let hidddenGroups = document.querySelector(".innerContent"); 

//     hiddenGroups.innerHTML = alert(123);

let groupStudents = [
    FE15 = [
        "Charlotta Abrahamsson",
        "Cecilia Lindgren",
        "Gunnel Jonasson",
        "David Holm",
        "Margareta Eriksson",
        "Ulrika Björk",
        "Martin Lundqvist",
        "Fredrik Lindberg",
        "Birgit Hassan",
        "Magnus Lind",
        "Bengt Magnusson",
        "Pia Hansen",
        "Arne Eklund",
        "Thomas Jakobsson",
        "Roland Blomqvist",
        "Charlotte Lund",
        "Nils Svensson",
        "Oskar Berg",
        "Robin Sundberg",
        "Lisbeth Åström",
        "Anneli Bergqvist",
        "Inga Hellström",
        "Ellen Blom",
        "Kurt Hedlund",
        "Claes Nordström",
        "Jonathan Ekström",
        "Agnes Sundström",
        "Kerstin Hansson",
        "Elsa Bergman",
        "Bo Olofsson",
        "Kent Berggren",
        "Anna Karlsson",
        "Anders Nilsson",
        "Caroline Nyström",
        "Kristina Nilsson",
        "Gunnar Bengtsson",
        "Sara Lindberg",
        "Julia Holmberg",
        "Anita Lind",
        "Emil Fransson",
        "Johanna Olofsson",
        "Mats Mattsson",
        "Tobias Nordin",
        "Ann-Marie Dahlberg",
        "Frida Hermansson",
        "Arvid Hassan",
        "Linda Engström",
        "Katarina Magnusson"
    ],
    FE16 = [
        "Torbjörn Andreasson",
        "Mikael Larsson",
        "Sonja Andreasson",
        "Inger Lindström",
        "Sofie Fransson",
        "Karin Persson",
        "Anton Björklund",
        "Leif Sandberg",
        "Marcus Björk",
        "Jenny Lundberg",
        "Annika Lundin",
        "Christer Bergström",
        "Berit Åberg",
        "Helena Jönsson",
        "Rut Berggren",
        "Matilda Gunnarsson",
        "Dan Strömberg",
        "Siv Löfgren",
        "Jörgen Hermansson",
        "Maja Ekström",
        "Isabelle Falk",
        "Alexandra Holmgren",
        "Åsa Nyberg",
        "Emma Jakobsson",
        "Anette Samuelsson",
        "Sebastian Viklund",
        "Roger Pålsson",
        "Åke Lindqvist",
        "Helen Eklund",
        "Linnéa Svensson",
        "Ali Norberg",
        "Lennart Jansson",
        "Ingrid Pettersson",
        "Marianne Jansson",
        "Stefan Lundgren",
        "Britt Eliasson",
        "Maria Andersson"
    ],

    FE17 = [
        "Joakim Söderberg",
        "Josef Åkesson",
        "Hugo Falk",
        "Mattias Fredriksson",
        "Linus Öberg",
        "Axel Danielsson",
        "Therese Lundgren",
        "Elias Hellström",
        "Amanda Mårtensson",
        "Ludvig Sundström",
        "Sofia Jonsson",
        "Karl Andersson",
        "Yvonne Lundström",
        "Lucas Sjögren",
        "Adam Abrahamsson",
        "Karolina Mohamed",
        "Oliver Hansen",
        "Astrid Isaksson",
        "Emanuel Åberg",
        "Johnny Martinsson",
        "Per Eriksson",
        "Louise Berglund",
        "Elisabeth Johansson",
        "Ebba Martinsson",
        "Marie Gustafsson",
        "Josefin Holm",
        "John Berglund",
        "Gösta Ek",
        "Rickard Löfgren",
        "Kenneth Ström",
        "Ingemar Håkansson",
        "Andreas Lundberg",
        "William Mårtensson",
        "Stig Bergqvist",
        "Agneta Viklund",
        "Georg Blom",
        "Kjell Wikström",
        "Håkan Nyström",
        "Erika Pålsson",
        "Albin Åström"
    ],

    EK16 = [
        "Peter Hansson",
        "Kristin Ali",
        "Sandra Nordin",
        "Jessica Sundberg",
        "Filip Claesson",
        "Gunilla Sjöberg",
        "Björn Sjöberg",
        "Hans Jonsson",
        "Viktoria Lindqvist",
        "Carina Fredriksson",
        "Märta Sjögren",
        "Bertil Engström",
        "Wilhelm Mohamed",
        "Eva Larsson",
        "Alexander Axelsson",
        "Mona Norberg",
        "Camilla Claesson",
        "Lena Bengtsson",
        "Sten Ahmed",
        "Olivia Åkesson",
        "Christian Gunnarsson",
        "Ida Danielsson",
        "Henrik Henriksson",
        "Robert Lundin",
        "Ingvar Lundström",
        "Klara Ahmed",
        "Niklas Bergman",
        "Lovisa Björklund",
        "Viktor Samuelsson",
        "Madeleine Nordström",
        "Emilia Ek",
        "Sven Jönsson",
        "Viola Wallin",
        "Lisa Blomqvist",
        "Ellinor Hedlund",
        "Monica Axelsson",
        "Alf Månsson",
        "Maj Strömberg",
        "Börje Jonasson",
        "Tommy Nyberg",
        "Irene Lundqvist",
        "Göran Lindgren",
        "Olof Persson",
        "Jan Gustafsson",
        "Jonas Wallin",
        "Birgitta Olsson",
        "Rebecka Ström",
        "Ulla Sandberg",
        "Mohamed Isaksson",
        "Ann Forsberg",
        "Gustav Pettersson",
        "Ingegerd Henriksson",
        "Christoffer Ali",
        "Malin Håkansson",
        "Rune Dahlberg"
    ]
];


// Spits out the class list chosen from select-list and number of groups
function groupGenerateClassListAndGroups() {
    groupGenerateClassList();
    groupGenerateGroups();
}

function groupGenerateClassList() {
    let groupSelectList = document.querySelector("#groupsSelectList");
    let groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    let groupClassList = document.querySelector("#groupClassList");
    let groupSelectListCount = document.querySelector("#groupsSelectListCount");
    let groupGroups = document.querySelector("#groupGroups");

    groupClassList.innerHTML = "";
    for (let i = 0; i < groupStudents.length; i++) {
        // Check witch class is selected
        if (groupSelectListValue == i) {
            for (let j = 0; j < groupStudents[i].length; j++) {

                groupStudents[i].sort();

                // Generates the class list
                groupClassList.innerHTML += "<div draggable=\"true\" ondragover=\"noAllowDrop(event)\" ondragstart=\"onDragStart(event)\" ondragleave=\"onDragLeave(event)\" class=\"groupStudent\" id=\"drag" + i + j + "\">" + groupStudents[i][j] + "</div>";
            }
            // Displays the numbers of students that is currently selected
            groupSelectListCount.innerHTML = groupStudents[i].length + " st";
        }
    }
}


// Spits out number of groups chosen
function groupGenerateGroups() {
    let numGroups = document.querySelector("#numGroups");
    let groupGroups = document.querySelector("#groupGroups");
    let groupGroupsCount = document.querySelector("#groupGroupsCount");

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < numGroups.value; i++) {
        let numGroupLabelValue = i + 1;
        groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + i + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"><div class=\"numGroupLabelValue\">" + numGroupLabelValue + "</div></div>";
    }
    groupGenerateClassList();
}


//AutoFill Per Group
function groupAutoFillPerGroup() {
    let numGroups = document.querySelector("#numGroups");
    let groupSelectList = document.querySelector("#groupsSelectList");
    let groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    let numGroupsMessge = document.querySelector("#numGroupsMessge");

    // Resets the list before appending new
    for (let o = 0; o < groupClassList.childNodes.length; o++) {
        groupClassList.childNodes[o].style.transition = "1s";
        groupClassList.childNodes[o].style.transitionDelay = o * 30 + "ms";
        groupClassList.childNodes[o].style.opacity = 0;
        groupClassList.childNodes[o].style.marginLeft = "-60px";
    }

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < groupStudents.length; i++) {

        // Check witch class is selected
        if (groupSelectListValue == i) {

            let size = Math.ceil(groupStudents[i].length / numGroups.value);

            // Randomizes the array
            shuffleArray(groupStudents[i]);

            let studentUniqueId = 0;
            let dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            // If number of groups is not corrsponding to number of students show message
            if (dividedGroups.length != numGroups.value) {
                numGroupsMessge.innerHTML = "OBS! Det är ojämn fördelning i grupperna för att du valt <strong>" + numGroups.value + "</strong> grupper på <strong>" + groupStudents[i].length + "</strong> elever.<br> Värdet har ändrats till <strong>" + dividedGroups.length + "</strong> antal grupper. Minst två studenter per grupp!";
            } else {
                numGroupsMessge.innerHTML = "";
            }

            for (let k = 0; k < dividedGroups.length; k++) {

                let numGroupLabelValue = k + 1;
                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"><div class=\"numGroupLabelValue\">" + numGroupLabelValue + "</div></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {

                    studentUniqueId++;

                    let transtime = (50 * (dividedGroups[k].length - j));
                    let item = document.createElement("div");
                    let textNode = document.createTextNode(dividedGroups[k][j]);
                    item.appendChild(textNode);
                    let list = document.getElementById("group" + k);
                    setAttributes(list.insertBefore(item, list.childNodes[0]), {
                        "draggable": "true",
                        "ondragstart": "onDragStart(event)",
                        "ondragleave": "onDragLeave(event)",
                        "ondragover": "noAllowDrop(event)",
                        "class": "groupStudent",
                        "id": "drag" + studentUniqueId
                    });

                    item.style.opacity = 0;
                    item.style.marginLeft = "150px";
                    //item.style.transitionDelay = "2s";
                    item.style.transition = "1s";
                }
            }
        }
    }
    setTimeout(function () {
        groupClassList.innerHTML = "";
    }, 1000);
    let things = document.querySelectorAll("#groupGroups .groupStudent");
    for (let p = 0; p < things.length; p++) {
        setTimeout(function () {
            things[p].style.opacity = 1;
            things[p].style.marginLeft = 0;
        }, p * 20)
    }
}

//AutoFill Per Group
function groupAutoFillPerStudent() {
    let numStudents = document.querySelector("#numStudents");
    let groupSelectList = document.querySelector("#groupsSelectList");
    let groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    let numStudentsMessge = document.querySelector("#numStudentsMessge");

    // Resets the list before appending new 
    // Resets the list before appending new
    for (let o = 0; o < groupClassList.childNodes.length; o++) {
        groupClassList.childNodes[o].style.transition = "1s";
        groupClassList.childNodes[o].style.transitionDelay = o * 30 + "ms";
        groupClassList.childNodes[o].style.opacity = 0;
        groupClassList.childNodes[o].style.marginLeft = "-60px";
    }

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < groupStudents.length; i++) {
        // Check witch class is selected
        if (groupSelectListValue == i) {
            let size = numStudents.value;

            // Randomizes the array
            shuffleArray(groupStudents[i]);

            let studentUniqueId = 0;
            let dividedGroups = new Array(Math.ceil(groupStudents[i].length / size)).fill("")
                .map(function () {
                    return this.splice(0, size);
                }, groupStudents[i].slice());

            if (dividedGroups.length * size > groupStudents[i].length) {
                numStudentsMessge.innerHTML = "OBS! Antalet elver per grupp är ojämnt.";
            } else {
                numStudentsMessge.innerHTML = "Härligt! Fördelningen är jämn!";
            }

            for (let k = 0; k < dividedGroups.length; k++) {
                groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + k + "\" ondrop=\"onDrop(event)\" ondragover=\"onDragOver(event)\" ondragleave=\"onDragLeave(event)\"></div>";

                for (let j = 0; j < dividedGroups[k].length; j++) {
                    let item = document.createElement("div");
                    let textNode = document.createTextNode(dividedGroups[k][j]);

                    studentUniqueId++;

                    item.appendChild(textNode);

                    let list = document.getElementById("group" + k);
                    setAttributes(list.insertBefore(item, list.childNodes[0]), {
                        "draggable": "true",
                        "ondragstart": "onDragStart(event)",
                        "ondragleave": "onDragLeave(event)",
                        "class": "groupStudent",
                        "id": "drag" + studentUniqueId, // Uniqe id for every item - look into more fore buggy behavior!
                        "style": "overflow:hidden;"
                    });
                    item.style.opacity = 0;
                    item.style.marginLeft = "150px";
                    item.style.marginRight = "-150px";
                    //item.style.transitionDelay = "2s";
                    item.style.transition = "1s";
                }
            }
        }
    }

    setTimeout(function () {
        groupClassList.innerHTML = "";
    }, 1000);
    let things = document.querySelectorAll("#groupGroups .groupStudent");
    for (let p = 0; p < things.length; p++) {
        setTimeout(function () {
            things[p].style.opacity = 1;
            things[p].style.marginLeft = 0;
            things[p].style.marginRight = 0;
        }, p * 20)
    }
}


// For adding more then one attribute on element
function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

groupGenerateGroups();