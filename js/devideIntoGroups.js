var groupStudents = [
    {name:"Anton", class:"FE15"},
    {name:"Kalle", class:"FE15"},
    {name:"Robbin", class:"FE15"},
    {name:"Callé", class:"FE15"},
    {name:"Rabarber", class:"FE15"},
    {name:"Kebab", class:"FE15"},
    {name:"Rotete", class:"FE15"},
    {name:"Sara", class:"FE15"},
    {name:"Christoffer", class:"FE15"},
    {name:"Sebastian", class:"FE15"},
    
    {name:"William", class:"FE16"},
    {name:"Tim", class:"FE16"},
    {name:"Robba", class:"FE16"},
    {name:"Atnon", class:"FE16"},
    {name:"Hello", class:"FE16"},
    {name:"Tim Arro", class:"FE16"},
    {name:"Rebecca", class:"FE16"},
    {name:"Klara", class:"FE16"},
    {name:"Tobias", class:"FE16"},
    {name:"Kristian", class:"FE16"},
    {name:"Klementin", class:"FE16"},

    {name:"Maria Johansson", class:"FE17"},
    {name:"Margareta Karlsson", class:"FE17"},
    {name:"Elisabeth Nilsson", class:"FE17"},
    {name:"Eva Eriksson", class:"FE17"},
    {name:"Erik Johansson", class:"FE17"},
    {name:"Lars Andersson", class:"FE17"},
    {name:"Christina Jonsson", class:"FE17"},
    {name:"Carl Persson", class:"FE17"},
    {name:"Gunnar Bengtsson", class:"FE17"},
    {name:"Hans Pettersson", class:"FE17"},
    {name:"Per Larsson", class:"FE17"},
    {name:"Johan Eriksson", class:"FE17"},
    {name:"Hans Pettersson", class:"FE17"},
    {name:"Ingrid Pettersson", class:"FE17"},
    {name:"Kristina Larsson", class:"FE17"},
    {name:"Lennart Jonsson", class:"FE17"}

];


function groupGenerateClassList() {
    var groupSelectList = document.querySelector("#groupsSelectList");
    var groupSelectListValue = groupSelectList.options[groupSelectList.selectedIndex].value;
    var groupClassList = document.querySelector("#groupClassList")
    var groupSelectListCount = document.querySelector("#groupsSelectListCount");
    var groupClassCounter = 0;

    console.log(groupSelectListValue);

    // Resets the list before appending new 
    groupClassList.innerHTML = "";

    // Test
    console.log(groupStudents.length);
        
    groupStudents.forEach(function(item, index) {
        // console.log(item.name);
        // console.log(item.class);

        
        // Check witch class is selected
        if(groupSelectListValue == item.class) {
            console.log(item.name, item.class, index);
            
            // Generates the class list
            groupClassList.innerHTML += "<div class=\"groupStudent\" id=\"student" + index + "\">" + item.name + "</div>";
            
            // Counts how many students in every class there is
            groupClassCounter++;

        }

    });

    // Test
    console.log(groupClassCounter);
   
    // Displays the numbers of students that is currently selected
    groupSelectListCount.innerHTML = "innehåller " + groupClassCounter + " elever";
}


function groupGenerateGroups() {
    var numGroups = document.querySelector("#numGroups");
    var groupGroups = document.querySelector("#groupGroups");
    var groupGroupsCount = document.querySelector("#groupGroupsCount");
    var groupGroupsCounter = 0;

    console.log(numGroups.value);

    // Resets the list before appending new 
    groupGroups.innerHTML = "";

    for (let i = 0; i < numGroups.value; i++) {
        
        console.log("groupGroups");
        groupGroups.innerHTML += "<div class=\"groupGroup\" id=\"group" + i + "\"></div>";
        // <div class="groupGroup" id="group1"></div>
        // <div class="groupGroup" id="group2"></div>

        groupGroupsCounter++;

    }
    // Displays the numbers of students that is currently selected
    groupGroupsCount.innerHTML = "innehåller " + groupGroupsCounter + " grupper";

}
// Displays the currently selected class
groupGenerateClassList();
groupGenerateGroups()
